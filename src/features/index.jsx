import { combineReducers } from "redux"; //Permet de combiner plusieurs reducers en un seul
import authReducer from "./login/authSlice"; 

// fonction combineReducers pour combiner tous les reducers
const rootReducer = combineReducers({
  auth: authReducer,
})

// Export pour créer le store redux
export default rootReducer
