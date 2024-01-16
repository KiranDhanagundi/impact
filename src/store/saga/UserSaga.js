import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../../pages/App/Users/actions";
import appSevices from "../services/appServices";

function* fetchUsers(args) {
  try {
    const response = yield call(appSevices.fetchUsers, args);
    const userData = yield response.json();
    yield put(actions.FETCH_USER_SUCCESS(userData));
  } catch (error) {
    yield put(actions.FETCH_USER_FAILURE(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(actions.FETCH_USER_REQUEST, fetchUsers);
}

export default usersSaga;
