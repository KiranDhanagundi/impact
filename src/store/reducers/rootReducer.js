import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import toasReducer from "./toastReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  auth: authReducer,
  toast: toasReducer,
  product: productReducer,
});

export default rootReducer;
