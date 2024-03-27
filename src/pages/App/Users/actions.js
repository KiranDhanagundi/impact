export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (userData) => ({
  type: FETCH_USER_SUCCESS,
  payload: userData,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const editUserRequest = (userData) => ({
  type: EDIT_USER_REQUEST,
  payload: userData,
});

export const addUserRequest = (userData) => ({
  type: ADD_USER_REQUEST,
  payload: userData,
});

export const deleteUserRequest = (userData) => ({
  type: DELETE_USER_REQUEST,
  payload: userData,
});
