import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
