import axios from "axios";
import api from "../../api";

const API_URL = "https://jsonplaceholder.typicode.com";

function* fetchUser(args) {
  try {
    const user = yield call(api.fetchUserApi, "id");
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

// export const fetchUsersApi = async () => {
//   const response = await axios.get(`${API_URL}/users`);
//   return response;
// };

const OAUTH_API_URL = "YOUR_OAUTH_API_URL";

export const signIn = async (accessToken) => {
  try {
    const response = await axios.get(`${OAUTH_API_URL}`, {
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (accessToken) => {
  try {
    const response = await axios.get(`${OAUTH_API_URL}`, {
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const requestAccessToken = async (code) => {
//   try {
//     const response = await axios.post(`${OAUTH_API_URL}/token`, {
//       code,
//       grant_type: "authorization_code",
//       // Add other required parameters
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
