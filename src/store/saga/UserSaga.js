import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../../pages/App/Users/actions";
// import { fetchUserList } from "../services/appServices";

import {
  isUserExists,
  fetchAwsS3UserList,
  addUsertoAwsS3,
  editUsertoAwsS3,
  inactivateUserfromAwsS3,
} from "../../utils/AwsAuth";

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

function* addUser(args) {
  try {
    const isUserExist = yield isUserExists(args.payload);
    if (!isUserExist) {
      const response = yield addUsertoAwsS3(args.payload);
      if (response) {
        yield put(actions.fetchUserRequest());
        yield put({
          type: "SHOW_TOAST",
          payload: {
            title: "User added successfully",
            status: "success",
          },
        });
      }
    } else {
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Email id alreday exists",
          status: "error",
        },
      });
    }
  } catch (error) {
    console.error("Add user error:", error);
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to add user",
        status: "error",
      },
    });
  }
}

function* editUser(args) {
  try {
    const response = yield editUsertoAwsS3(args.payload);
    if (response) {
      yield put(actions.fetchUserRequest());
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "User edited successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    console.error("Edite user error:", error);
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to edit user",
        status: "error",
      },
    });
  }
}

function* deleteUser(args) {
  try {
    const response = yield inactivateUserfromAwsS3(args.payload);
    if (response) {
      yield put(actions.fetchUserRequest());
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "User delete / inactivate successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    console.error("Delete / Inactivate user error:", error);
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to delete / inactivate user",
        status: "error",
      },
    });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(actions.FETCH_USER_REQUEST, fetchUsers);
}

export function* watchAddUser() {
  yield takeLatest(actions.ADD_USER_REQUEST, addUser);
}

export function* watchEditUser() {
  yield takeLatest(actions.EDIT_USER_REQUEST, editUser);
}

export function* watchDeleteUser() {
  yield takeLatest(actions.DELETE_USER_REQUEST, deleteUser);
}
