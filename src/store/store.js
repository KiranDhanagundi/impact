// // store.js
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import usersReducer from "./reducers/usersReducer";
// import authReducer from "./reducers/authReducer";
// import { watchFetchUsers } from "./saga/UserSaga";
// import { watchLogin, watchSignup } from "./saga/AuthSaga";

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   usersReducer,
//   authReducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(watchFetchUsers);
// sagaMiddleware.run(watchLogin);
// sagaMiddleware.run(watchSignup);

// export default store;
