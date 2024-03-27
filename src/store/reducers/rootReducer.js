import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import toasReducer from "./toastReducer";
import productReducer from "./productReducer";
import accessReducer from "./accessReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  auth: authReducer,
  toast: toasReducer,
  product: productReducer,
  access: accessReducer,
});

export default rootReducer;
