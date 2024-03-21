import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import ToastMessage from "./store/saga/ToastMessage";
import { SessionProvider } from "../src/pages/Auth/SessionContext";

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <Provider store={store}>
        <App />
        <ToastMessage />
      </Provider>
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
