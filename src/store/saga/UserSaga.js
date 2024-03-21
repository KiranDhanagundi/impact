import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../../pages/App/Users/actions";
// import { fetchUserList } from "../services/appServices";
import { fetchAwsS3UserList } from "../../utils/AwsAuth";

function* fetchUsers() {
  try {
    const response = yield fetchAwsS3UserList();
    yield put({ type: actions.FETCH_USER_SUCCESS, payload: response });
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Fetch user list successful",
        status: "success",
      },
    });
  } catch (error) {
    yield put({ type: actions.FETCH_USER_FAILURE, error: "api failure" });
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Fetch user list failed",
        status: "error",
      },
    });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(actions.FETCH_USER_REQUEST, fetchUsers);
}
export default watchFetchUsers;
