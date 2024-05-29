import axios from "axios";
import { loginSuccess, loginFailure } from "./authSlice";

export const login = (credentials) => async (dispatch) => {
  console.log("Credentials:", credentials);
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      {
        email: credentials.username,
        password: credentials.password,
      }
    );
    console.log("Response:", response.data, "token", response.data.body.token);
    dispatch(
      loginSuccess({
        token: response.data.body.token,
      })
    );
  } catch (error) {
    console.error("Error:", error.response?.data?.message || error.message);
    dispatch(loginFailure(error.response.data.message));
  }
};
