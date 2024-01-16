import axios from "axios";

const OAUTH_API_URL = "YOUR_OAUTH_API_URL";

export const fetchUserDetails = async (accessToken) => {
  try {
    const response = await axios.get(`${OAUTH_API_URL}/user`, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestAccessToken = async (code) => {
  try {
    const response = await axios.post(`${OAUTH_API_URL}/token`, {
      code,
      grant_type: "authorization_code",
      // Include other required parameters
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${OAUTH_API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
