import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
});

export default rootReducer;
