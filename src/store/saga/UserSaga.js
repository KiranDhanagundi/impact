import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../../pages/App/Users/actions";
// import { fetchUserList } from "../services/appServices";

// function* fetchUsers() {
//   try {
//     const response = yield callfetchUserList();
//     const userData = yield response.json();
//     console.log("saga", userData);
//     yield put({ type: actions.FETCH_USER_SUCCESS, payload: userData });
//   } catch (error) {
//     yield put({ type: actions.FETCH_USER_FAILURE, error: "api failure" });
//   }
// }

function* fetchUsers(action) {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const userData = yield response.json();
    console.log(userData);
    yield put({ type: actions.FETCH_USER_SUCCESS, payload: userData });
  } catch (error) {
    yield put({ type: actions.FETCH_USER_FAILURE, error: "api failure" });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(actions.FETCH_USER_REQUEST, fetchUsers);
}
export default watchFetchUsers;
