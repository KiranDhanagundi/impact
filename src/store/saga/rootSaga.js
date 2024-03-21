import { all } from "redux-saga/effects";
import { watchFetchUsers } from "./UserSaga";
import { watchFecthProducts, watchFecthUserProducts } from "./productSaga";
import {
  watchSignupUser,
  watchSigninUser,
  watchGoogleSignIn,
  watchGithubSignIn,
  watchStripeSignIn,
  watchAppleSignIn,
  watchFetchAwsConfig,
} from "./AuthSaga";

function* rootSaga() {
  yield all([
    watchSignupUser(),
    watchSigninUser(),
    watchFetchUsers(),
    watchGoogleSignIn(),
    watchGithubSignIn(),
    watchStripeSignIn(),
    watchAppleSignIn(),
    watchFetchAwsConfig(),
    watchFecthProducts(),
    watchFecthUserProducts(),
  ]);
}

export default rootSaga;
