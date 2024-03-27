import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../../pages/App/AccessManagement/actions";

import {
  fetchAwsS3ResourceList,
  addResourcetoAwsS3,
  editResourcetoAwsS3,
  deleteResourceFromAwsS3,
  addRoletoAwsS3,
  fetchAwsS3RolesConfig,
  editRoleToAwsS3,
  deleteRoleFromAwsS3,
} from "../../utils/AwsAuth";

function* fetchResource() {
  try {
    const resourceList = yield fetchAwsS3ResourceList();

    if (resourceList) {
      yield put(actions.fetchResourceSuccess(resourceList));
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Resource list fetched successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put(actions.fetchResourceFailure(error));
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to fetch resource list",
        status: "error",
      },
    });
  }
}

function* addResource(args) {
  try {
    const response = yield addResourcetoAwsS3(args.payload);
    if (response) {
      yield put({
        type: actions.FETCH_RESOURCE_REQUEST,
      });

      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Resource added successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to add resource",
        status: "error",
      },
    });
  }
}

function* editResource(args) {
  try {
    const response = yield editResourcetoAwsS3(args.payload);
    if (response) {
      yield put({
        type: actions.FETCH_RESOURCE_REQUEST,
      });

      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Resource edited successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to edit resource",
        status: "error",
      },
    });
  }
}

function* deleteResource(args) {
  try {
    const response = yield deleteResourceFromAwsS3(args.payload);
    if (response) {
      yield put({
        type: actions.FETCH_RESOURCE_REQUEST,
      });

      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Resource deleted successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to delete resource",
        status: "error",
      },
    });
  }
}

// Roles functions
function* fetchRoles() {
  try {
    const rolesList = yield fetchAwsS3RolesConfig();

    if (rolesList) {
      yield put(actions.fetchRolesSuccess(rolesList));
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Roles list fetched successfully",
          status: "success",
        },
      });
    }
    console.log("fectch roles saga", rolesList);
  } catch (error) {
    yield put(actions.fetchRolesFailure(error));
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to fetch roles list",
        status: "error",
      },
    });
  }
}

function* addRole(args) {
  try {
    const response = yield addRoletoAwsS3(args.payload);
    if (response) {
      yield put({
        type: actions.FETCH_ROLES_REQUEST,
      });

      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Role added successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to add role",
        status: "error",
      },
    });
  }
}

// Worker saga for editing a role
function* editRole(args) {
  try {
    const response = yield editRoleToAwsS3(args.payload);

    if (response) {
      yield put(actions.fetchRolesRequest());
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Role edited successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to edit role",
        status: "error",
      },
    });
  }
}

// Worker saga for deleting a role
function* deleteRole(args) {
  try {
    const response = yield deleteRoleFromAwsS3(args.payload);

    if (response) {
      yield put(actions.fetchRolesRequest());
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Deleted role  successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Failed to delete role",
        status: "error",
      },
    });
  }
}

export function* watchFetchResource() {
  yield takeLatest(actions.FETCH_RESOURCE_REQUEST, fetchResource);
}

export function* watchAddResource() {
  yield takeLatest(actions.ADD_RESOURCE_REQUEST, addResource);
}

export function* watchEditResource() {
  yield takeLatest(actions.EDIT_RESOURCE_REQUEST, editResource);
}

export function* watchDeleteResource() {
  yield takeLatest(actions.DELETE_RESOURCE_REQUEST, deleteResource);
}

export function* watchFetchRolesRequest() {
  yield takeLatest(actions.FETCH_ROLES_REQUEST, fetchRoles);
}

export function* watchAddRoleRequest() {
  yield takeLatest(actions.ADD_ROLE_REQUEST, addRole);
}

export function* watchEditRoleRequest() {
  yield takeLatest(actions.EDIT_ROLE_REQUEST, editRole);
}

export function* watchDeleteRoleRequest() {
  yield takeLatest(actions.DELETE_ROLE_REQUEST, deleteRole);
}
