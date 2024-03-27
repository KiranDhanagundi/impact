// reducer.js

import * as actions from "../../pages/App/AccessManagement/actions";

const initialState = {
  resourceList: [],
  error: null,
  rolesList: {},
};

const accessReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_RESOURCE_SUCCESS:
      return {
        ...state,
        resourceList: action.payload.resourceList,
        error: null,
      };
    case actions.FETCH_RESOURCE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case actions.FETCH_ROLES_SUCCESS:
      return {
        ...state,
        rolesList: action.payload.roles,
        error: null,
      };
    case actions.FETCH_ROLES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default accessReducer;
