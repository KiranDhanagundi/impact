import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// // import "./index.css";
// // import "./App.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store/store";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
