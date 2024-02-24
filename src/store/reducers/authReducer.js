import * as actions from "../../pages/Auth/actions";

const initialState = {
  userDetails: null,
  accessToken: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: action.payload.userDetails,
        // accessToken: action.payload.accessToken,
        error: null,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case actions.LOGIN_FAILURE:
    case actions.SIGNUP_FAILURE:
      return {
        ...state,
        userDetails: null,
        accessToken: null,
        error: action.payload,
      };
    case actions.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        error: null,
      };
    case actions.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        userDetails: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
