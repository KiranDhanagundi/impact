export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const GOOGLE_SIGN_IN_REQUEST = "GOOGLE_SIGN_IN_REQUEST";
export const GOOGLE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS";
export const GOOGLE_SIGN_IN_FAILURE = "GOOGLE_SIGN_IN_FAILURE";

export const GITHUB_SIGN_IN_REQUEST = "GITHUB_SIGN_IN_REQUEST";
export const GITHUB_SIGN_IN_SUCCESS = "GITHUB_SIGN_IN_SUCCESS";
export const GITHUB_SIGN_IN_FAILURE = "GITHUB_SIGN_IN_FAILURE";

export const STRIPE_SIGN_IN_REQUEST = "STRIPE_SIGN_IN_REQUEST";
export const STRIPE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS";
export const STRIPE_SIGN_IN_FAILURE = "GOOGLE_SIGN_IN_FAILURE";

export const APPLE_SIGN_IN_REQUEST = "APPLE_SIGN_IN_REQUEST";
export const APPLE_SIGN_IN_SUCCESS = "APPLE_SIGN_IN_SUCCESS";
export const APPLE_SIGN_IN_FAILURE = "APPLE_SIGN_IN_FAILURE";

export const CLEAR_USER_DETAILS = "CLEAR_USER_DETAILS";

export const SEND_WELCOME_EMAIL_REQUEST = "SEND_WELCOME_EMAIL_REQUEST";
export const SEND_WELCOME_EMAIL_SUCCESS = "SEND_WELCOME_EMAIL_SUCCESS";
export const SEND_WELCOME_EMAIL_FAILURE = "SEND_WELCOME_EMAIL_FAILURE";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

export const clearUserDetails = () => ({
  type: CLEAR_USER_DETAILS,
});

// For Sign in
export const signinRequest = (email, password) => ({
  type: SIGNIN_REQUEST,
  payload: { email, password },
});

export const signinSuccess = (userDetails, accessToken) => ({
  type: SIGNIN_SUCCESS,
  payload: { userDetails, accessToken },
});

export const signinFailure = (error) => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

// For Sign up
export const signupRequest = (payload) => ({
  type: SIGNUP_REQUEST,
  payload: payload,
});

export const signupSuccess = (userDetails, accessToken) => ({
  type: SIGNUP_SUCCESS,
  payload: { userDetails, accessToken },
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

// Google sigin
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

// Github sigin
export const githubSignInRequest = () => ({
  type: "GITHUB_SIGN_IN_REQUEST",
});

export const githubSignInSuccess = (userDetails) => ({
  type: "GITHUB_SIGN_IN_SUCCESS",
  payload: userDetails,
});

export const githubSignInFailure = (error) => ({
  type: "GITHUB_SIGN_IN_FAILURE",
  payload: error,
});

// Stripe sigin
export const stripeSignInRequest = () => ({
  type: "STRIPE_SIGN_IN_REQUEST",
});

export const stripeSignInSuccess = (userDetails) => ({
  type: "STRIPE_SIGN_IN_SUCCESS",
  payload: userDetails,
});

export const stripeSignInFailure = (error) => ({
  type: "STRIPE_SIGN_IN_FAILURE",
  payload: error,
});

// Apple signin
export const appleSignInRequest = () => ({
  type: "APPLE_SIGN_IN_REQUEST",
});

export const appleSignInSuccess = (userDetails) => ({
  type: "APPLE_SIGN_IN_SUCCESS",
  payload: userDetails,
});

export const appleSignInFailure = (error) => ({
  type: "APPLE_SIGN_IN_FAILURE",
  payload: error,
});

// For sending welcome email
export const sendWelcomeEmailRequest = (recipient, subject, message) => ({
  type: SEND_WELCOME_EMAIL_REQUEST,
  payload: { recipient, subject, message },
});

export const sendWelcomeEmailSuccess = () => ({
  type: SEND_WELCOME_EMAIL_SUCCESS,
});

export const sendWelcomeEmailFailure = (error) => ({
  type: SEND_WELCOME_EMAIL_FAILURE,
  payload: error,
});

// For Password Reset
export const resetPasswordRequest = (email, newPassword) => ({
  type: RESET_PASSWORD_REQUEST,
  payload: { email, newPassword },
});

export const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordFailure = (error) => ({
  type: RESET_PASSWORD_FAILURE,
  payload: { error },
});
