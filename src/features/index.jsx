import { combineReducers } from "redux";
import authReducer from "./login/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer
