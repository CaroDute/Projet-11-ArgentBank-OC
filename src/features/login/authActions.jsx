import axios from "axios";
import { loginSuccess, loginFailure, editSuccess } from "./authSlice";

export const login = (authInfos) => async (dispatch) => {
  // Requête API
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: authInfos.username,
        password: authInfos.password,
      }
    );
    // si requête ok envoi de l'action 'loginSuccess' avec le token reçu. Mise à jour de l'état avec le token.
    dispatch(
      loginSuccess({
        token: response.data.body.token,
      })
    );
    // si requête echoue envoi action 'loginFailure' alors envoi message erreur
  } catch (error) {
    console.error("Error:", error.response?.data?.message || error.message);
    dispatch(loginFailure(error.response.data.message));
  }
};

export const profile = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.auth.token;
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(
      loginSuccess({
        firstName: response.data.body.firstName,
        lastName: response.data.body.lastName,
        userName: response.data.body.userName,
      })
    );
  } catch (error) {
    console.error("Error:", error.response.data.message || error.message);
  }
};

export const edit = (userName) => async (dispatch, getState) => {
  const state = getState();
  const token = state.auth.token;
  try {
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        userName: userName,
      },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(editSuccess(response.data.body.userName));
    console.log(response.data.body.userName);
  } catch (error) {
    console.error("Error:", error.response?.data?.message || error.message);
  }
};
