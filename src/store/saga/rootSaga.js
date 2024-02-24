import { all } from "redux-saga/effects";
import { watchFetchUsers } from "./UserSaga";
import { watchGoogleSignIn } from "./AuthSaga";

function* rootSaga() {
  yield all([watchFetchUsers(), watchGoogleSignIn()]);
}

export default rootSaga;
