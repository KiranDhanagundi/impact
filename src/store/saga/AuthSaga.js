import { put, takeLatest } from "redux-saga/effects";
import * as actions from "../../pages/Auth/actions";
import * as awsActions from "../../pages/Public/actions";
import //   requestAccessToken,
// fetchUserDetails,
// registerUser,
"../services/authService";
import {
  storeUsersLoginDetails,
  fetchUserDetails,
  isUserExists,
  sendEmail,
  fetchAwsS3Config,
} from "../../utils/AwsAuth";

function* SignupUser(args) {
  try {
    const isUserExist = yield isUserExists(args.payload);
    if (!isUserExist) {
      const response = yield storeUsersLoginDetails(args.payload);
      if (response) {
        yield put(actions.signupSuccess(args.payload, null));
        yield put({
          type: "SHOW_TOAST",
          payload: {
            title: "Signup successful",
            status: "success",
          },
        });
      }
    } else {
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Email id alreday exists",
          status: "error",
        },
      });
    }
  } catch (error) {
    console.error("Signup error:", error);
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Signup failed",
        status: "error",
      },
    });
  }
}

function* SigninUser(args) {
  try {
    const response = yield fetchUserDetails(args.payload);
    if (response) {
      yield put(actions.signinSuccess(response, null));
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Signin successful",
          status: "success",
        },
      });
    } else {
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "Please enter email id and password",
          status: "error",
        },
      });
    }
  } catch (error) {
    console.error("Signin error:", error);
    yield put({
      type: "SHOW_TOAST",
      payload: {
        title: "Signin failed",
        status: "error",
      },
    });
  }
}

function* GoogleSignIn() {
  try {
    // Open the Google sign-in window
    window.open("http://localhost:5000/auth/google", "_self");
    yield put(actions.googleSignInSuccess("userDetails"));
    // window.open("http://localhost:5000/auth/google", "_self");
    // const googleSignInAPI = "http://localhost:5000/auth/google";
    // const response = yield call(googleSignInAPI); // Call your API function
    // yield put(googleSignInSuccess(response.data)); // Dispatch success action
  } catch (error) {
    yield put(actions.googleSignInFailure(error.message)); // Dispatch failure action
  }
}

function* GithubSignIn() {
  try {
    window.open("http://localhost:5000/auth/github", "_self");
    yield put(actions.githubSignInSuccess());
  } catch (error) {
    yield put(actions.githubSignInFailure(error.message)); // Dispatch failure action
  }
}

function* StripeSignIn() {
  try {
    // Open the Stripe sign-in window
    window.open("http://localhost:5000/auth/google", "_self");
    yield put(actions.stripeSignInSuccess());
  } catch (error) {
    yield put(actions.stripeSignInFailure(error.message));
  }
}

function* AppleSignIn() {
  try {
    // Open the Apple sign-in window
    window.open("http://localhost:5000/auth/google", "_self");
    yield put(actions.appleSignInSuccess());
  } catch (error) {
    yield put(actions.appleSignInFailure(error.message)); // Dispatch failure action
  }
}

function* sendWelcomeEmail(action) {
  const { recipient, subject, message } = action.payload;
  try {
    yield sendEmail(recipient, subject, message);
    yield put(actions.sendWelcomeEmailSuccess());
  } catch (error) {
    yield put(actions.sendWelcomeEmailFailure(error));
  }
}

export function* watchSignupUser() {
  yield takeLatest(actions.SIGNUP_REQUEST, SignupUser);
}

export function* watchSigninUser() {
  yield takeLatest(actions.SIGNIN_REQUEST, SigninUser);
}

export function* watchGoogleSignIn() {
  yield takeLatest(actions.GOOGLE_SIGN_IN_REQUEST, GoogleSignIn);
}

export function* watchGithubSignIn() {
  yield takeLatest(actions.GITHUB_SIGN_IN_REQUEST, GithubSignIn);
}

export function* watchStripeSignIn() {
  yield takeLatest(actions.STRIPE_SIGN_IN_REQUEST, StripeSignIn);
}

export function* watchAppleSignIn() {
  yield takeLatest(actions.APPLE_SIGN_IN_REQUEST, AppleSignIn);
}

export function* watchSendWelcomeEmail() {
  yield takeLatest(actions.SEND_WELCOME_EMAIL_REQUEST, sendWelcomeEmail);
}

function* fetchAwsConfig() {
  try {
    const response = yield fetchAwsS3Config();
    console.log("aws saga", response);
    if (response) {
      yield put(awsActions.awsConfigSuccess(response, null));
      yield put({
        type: "SHOW_TOAST",
        payload: {
          title: "config fetched successfully",
          status: "success",
        },
      });
    }
  } catch (error) {
    yield put(awsActions.awsConfigFailure(error));
  }
}

export function* watchFetchAwsConfig() {
  yield takeLatest(awsActions.AWS_CONFIG_REQUEST, fetchAwsConfig);
}
