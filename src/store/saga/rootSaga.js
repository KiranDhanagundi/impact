import { all } from "redux-saga/effects";
import {
  watchFetchUsers,
  watchAddUser,
  watchEditUser,
  watchDeleteUser,
} from "./UserSaga";
import { watchFecthProducts, watchFecthUserProducts } from "./productSaga";
import {
  watchFetchResource,
  watchAddResource,
  watchDeleteResource,
  watchEditResource,
  watchFetchRolesRequest,
  watchAddRoleRequest,
  watchEditRoleRequest,
  watchDeleteRoleRequest,
} from "./accessSaga";
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
    watchFetchResource(),
    watchAddResource(),
    watchEditResource(),
    watchDeleteResource(),
    watchFetchRolesRequest(),
    watchAddRoleRequest(),
    watchEditRoleRequest(),
    watchDeleteRoleRequest(),
    watchAddUser(),
    watchEditUser(),
    watchDeleteUser(),
  ]);
}

export default rootSaga;
