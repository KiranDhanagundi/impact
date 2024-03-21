import * as actions from "../../pages/Auth/actions";
import * as awsActions from "../../pages/Public/actions";

const initialState = {
  userDetails: null,
  accessToken: null,
  error: null,
  awsConfig: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        userDetails: action.payload.userDetails,
        // accessToken: action.payload.accessToken,
        error: null,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        userDetails: action.payload.userDetails,
        // accessToken: action.payload.accessToken,
        error: null,
      };
    case actions.SIGNIN_FAILURE:
      return {
        ...state,
        userDetails: null,
        accessToken: null,
        error: action.payload,
      };
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
    case actions.GITHUB_SIGN_IN_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        error: null,
      };
    case actions.GITHUB_SIGN_IN_FAILURE:
      return {
        ...state,
        userDetails: null,
        error: action.payload,
      };
    case actions.STRIPE_SIGN_IN_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        error: null,
      };
    case actions.STRIPE_SIGN_IN_FAILURE:
      return {
        ...state,
        userDetails: null,
        error: action.payload,
      };
    case actions.APPLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        error: null,
      };
    case actions.APPLE_SIGN_IN_FAILURE:
      return {
        ...state,
        userDetails: null,
        error: action.payload,
      };
    case actions.CLEAR_USER_DETAILS:
      return {
        ...state,
        userDetails: null,
      };
    case awsActions.AWS_CONFIG_SUCCESS:
      return {
        ...state,
        awsConfig: action.payload,
        error: null,
      };
    case awsActions.AWS_CONFIG_FAILURE:
      return {
        ...state,
        awsConfig: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
