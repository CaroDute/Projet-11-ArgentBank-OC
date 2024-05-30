import axios from "axios";
import { loginSuccess, loginFailure } from "./authSlice";

export const login = (authInfos) => async (dispatch) => {
  console.log("Auth Infos:", authInfos);
  // Requête API
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: authInfos.username,
        password: authInfos.password,
      }
    );
    console.log("Response:", response.data, "token", response.data.body.token);
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
  console.log('Token:', token);

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
    console.log("Response:", response.data);
    dispatch(
      loginSuccess({
        firstName: response.data.body.firstName,
      })
    );
  } catch (error) {
    console.error("Error:", error.response.data.message || error.message);
  }
};
