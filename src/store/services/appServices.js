import axios from "axios";
import { app } from "../../api";

export const fetchUserList = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log("service", response);
    return response.data;
  } catch (error) {
    throw error.message;
  }
};
