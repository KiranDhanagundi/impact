// store.js

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// mount it on the Store
const store = configureStore({
  reducer: rootReducer,
  middleware: () => {
    return middleware;
  },
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
