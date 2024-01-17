import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
} from "./actions";
import {
  //   requestAccessToken,
  fetchUserDetails,
  registerUser,
} from "./authService";

function* login(action) {
  try {
    // const { code } = action.payload;
    // const tokenResponse = yield call(requestAccessToken, code);
    const userDetails = yield call(
      fetchUserDetails
      //   tokenResponse.access_token
    );
    Cookies.set("userDetails", JSON.stringify(userDetails));
    // Cookies.set("accessToken", tokenResponse.access_token);

    yield put(loginSuccess(userDetails, null));
    // yield put(loginSuccess(userDetails, tokenResponse.access_token));
    // Set browser cookies here if needed using js-cookie or another library
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* signup(action) {
  try {
    const { userData } = action.payload;
    yield call(registerUser, userData);
    Cookies.set("userDetails", JSON.stringify(userData));
    // Cookies.set("accessToken", "YOUR_ACCESS_TOKEN_PLACEHOLDER");

    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}
