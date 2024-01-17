import { all } from "redux-saga/effects";
import { watchFetchUsers } from "./UserSaga";

function* rootSaga() {
  yield all([watchFetchUsers()]);
}

export default rootSaga;
