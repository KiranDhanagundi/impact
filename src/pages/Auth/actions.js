export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const GOOGLE_SIGN_IN_REQUEST = "GOOGLE_SIGN_IN_REQUEST";
export const GOOGLE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS";
export const GOOGLE_SIGN_IN_FAILURE = "GOOGLE_SIGN_IN_FAILURE";

export const loginRequest = (code) => ({ type: LOGIN_REQUEST, payload: code });
export const loginSuccess = (userDetails, accessToken) => ({
  type: LOGIN_SUCCESS,
  payload: { userDetails, accessToken },
});
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const signupRequest = (userData) => ({
  type: SIGNUP_REQUEST,
  payload: userData,
});
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});
/////

export const googleSignInRequest = () => ({
  type: "GOOGLE_SIGN_IN_REQUEST",
});

export const googleSignInSuccess = (userDetails) => ({
  type: "GOOGLE_SIGN_IN_SUCCESS",
  payload: userDetails,
});

export const googleSignInFailure = (error) => ({
  type: "GOOGLE_SIGN_IN_FAILURE",
  payload: error,
});
