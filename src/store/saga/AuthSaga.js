import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
  GOOGLE_SIGN_IN_REQUEST,
  googleSignInSuccess,
  googleSignInFailure,
} from "../../pages/Auth/actions";
import {
  //   requestAccessToken,
  fetchUserDetails,
  registerUser,
} from "../services/authService";

// function* login(action) {
//   try {
//     // const { code } = action.payload;
//     // const tokenResponse = yield call(requestAccessToken, code);
//     const userDetails = yield call(
//       fetchUserDetails
//       //   tokenResponse.access_token
//     );
//     Cookies.set("userDetails", JSON.stringify(userDetails));
//     // Cookies.set("accessToken", tokenResponse.access_token);

//     yield put(loginSuccess(userDetails, null));
//     // yield put(loginSuccess(userDetails, tokenResponse.access_token));
//     // Set browser cookies here if needed using js-cookie or another library
//   } catch (error) {
//     yield put(loginFailure(error.message));
//   }
// }

// function* signup(action) {
//   try {
//     const { userData } = action.payload;
//     yield call(registerUser, userData);
//     Cookies.set("userDetails", JSON.stringify(userData));
//     // Cookies.set("accessToken", "YOUR_ACCESS_TOKEN_PLACEHOLDER");

//     yield put(signupSuccess());
//   } catch (error) {
//     yield put(signupFailure(error.message));
//   }
// }

function* handleGoogleSignIn() {
  try {
    // Open the Google sign-in window
    window.open("http://localhost:5000/auth/google", "_self");
    yield put(googleSignInSuccess());
    // window.open("http://localhost:5000/auth/google", "_self");
    // const googleSignInAPI = "http://localhost:5000/auth/google";
    // const response = yield call(googleSignInAPI); // Call your API function
    // yield put(googleSignInSuccess(response.data)); // Dispatch success action
  } catch (error) {
    yield put(googleSignInFailure(error.message)); // Dispatch failure action
  }
}

// export function* watchLogin() {
//   yield takeLatest(LOGIN_REQUEST, login);
// }

// export function* watchSignup() {
//   yield takeLatest(SIGNUP_REQUEST, signup);
// }

export function* watchGoogleSignIn() {
  yield takeLatest(GOOGLE_SIGN_IN_REQUEST, handleGoogleSignIn);
}
