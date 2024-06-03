import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial du slice 'auth'
const initialState = {
  user: null, // infos de l'utilisateur connecté
  token: localStorage.getItem("token") || null, // jeton d'authentification
  error: null, // messages d'erreur liés à l'authentification
  isAuthenticated: false,
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  showForm: false,
};

const authSlice = createSlice({
  name: "auth", // nom de la slice utilisé pour générer les types d'action
  initialState, // état intial défini plus haut
  reducers: {
    // reducers qui mettent à jour l'état

    loginSuccess: (state, action) => {
      // reducer en cas de succès met à jour l'état avec le user et le token. Pas d'erreur
      state.user = action.payload.user; // state mis a jour avec infos du payload
      state.error = null; // Réinitialiser les erreurs si succès
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;

      if (!localStorage.getItem("token")) {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
      }
    },

    loginFailure: (state, action) => {
      // reducer pour afficher l'erreur
      state.error = action.payload; // State mis a jour avec le message d'erreur
    },

    logout: (state) => {
      // Réinitialise l'état à zero en mettant les 3 propriétés à 'null'
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },

    checkLocalStorageToken: (state) => {
      // Reducer qui permet de lier le token et l'utilisateur authentifié
      const token = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      } else {
        state.isAuthenticated = false;
        state.token = null;
      }
    },

    showEditUserName: (state) => {
      state.showForm = true;
    },

    hideEditUserName: (state) => {
      state.showForm = false;
    },

    editSuccess: (state, action) => {
      console.log("New UserName:", action.payload.userName);
      state.userName = action.payload.userName;
    },
  },
});

// Export des Actions et Reducers
export const {
  loginSuccess,
  loginFailure,
  logout,
  checkLocalStorageToken,
  profileSuccess,
  showEditUserName,
  hideEditUserName,
  editSuccess,
} = authSlice.actions;
export default authSlice.reducer;
