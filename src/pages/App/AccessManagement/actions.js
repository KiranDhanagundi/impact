//Resource actions
export const FETCH_RESOURCE_REQUEST = "FETCH_RESOURCE_REQUEST";
export const FETCH_RESOURCE_SUCCESS = "FETCH_RESOURCE_SUCCESS";
export const FETCH_RESOURCE_FAILURE = "FETCH_RESOURCE_FAILURE";

export const ADD_RESOURCE_REQUEST = "ADD_RESOURCE_REQUEST";
export const EDIT_RESOURCE_REQUEST = "EDIT_RESOURCE_REQUEST";
export const DELETE_RESOURCE_REQUEST = "DELETE_RESOURCE_REQUEST";

//Role Actions
export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";

export const ADD_ROLE_REQUEST = "ADD_ROLE_REQUEST";

export const EDIT_ROLE_REQUEST = "EDIT_ROLE_REQUEST";

export const DELETE_ROLE_REQUEST = "DELETE_ROLE_REQUEST";

// Resource functions
export const fetchResourceRequest = () => ({
  type: FETCH_RESOURCE_REQUEST,
});

export const fetchResourceSuccess = (resourceList) => ({
  type: FETCH_RESOURCE_SUCCESS,
  payload: { resourceList },
});

export const fetchResourceFailure = (error) => ({
  type: FETCH_RESOURCE_FAILURE,
  payload: { error },
});

export const addResourceRequest = (newResource) => ({
  type: ADD_RESOURCE_REQUEST,
  payload: newResource,
});

export const editResourceRequest = (editedResource) => ({
  type: EDIT_RESOURCE_REQUEST,
  payload: editedResource,
});

export const deleteResourceRequest = (resource) => ({
  type: DELETE_RESOURCE_REQUEST,
  payload: resource,
});

//Role Functions
export const fetchRolesRequest = () => ({
  type: FETCH_ROLES_REQUEST,
});

export const fetchRolesSuccess = (roles) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: roles,
});

export const fetchRolesFailure = (error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: error,
});

export const addRoleRequest = (payload) => ({
  type: ADD_ROLE_REQUEST,
  payload: payload,
});

export const editRoleRequest = (roleData) => ({
  type: EDIT_ROLE_REQUEST,
  payload: roleData,
});

export const deleteRoleRequest = (roleData) => ({
  type: DELETE_ROLE_REQUEST,
  payload: roleData,
});
