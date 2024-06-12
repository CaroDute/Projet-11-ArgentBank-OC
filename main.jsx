import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./src/features"

// Store redux, qui appelle mon rootReducer qui contient tous mes reducers combinés
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provider sert à fournir le store à tous les composants de l'app */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


