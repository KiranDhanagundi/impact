// import axios from "axios";
// import { app } from "../../api";

// export const fetchUserList = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     console.log("service", response);
//     return response.data;
//   } catch (error) {
//     throw error.message;
//   }
// };

// const OAUTH_API_URL = "YOUR_OAUTH_API_URL";

// export const signIn = async (accessToken) => {
//   try {
//     const response = await axios.get(`${OAUTH_API_URL}`, {
//       // headers: {
//       //   Authorization: `Bearer ${accessToken}`,
//       // },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const signUp = async (accessToken) => {
//   try {
//     const response = await axios.get(`${OAUTH_API_URL}`, {
//       // headers: {
//       //   Authorization: `Bearer ${accessToken}`,
//       // },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // export const requestAccessToken = async (code) => {
// //   try {
// //     const response = await axios.post(`${OAUTH_API_URL}/token`, {
// //       code,
// //       grant_type: "authorization_code",
// //       // Add other required parameters
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error;
// //   }
// // };
