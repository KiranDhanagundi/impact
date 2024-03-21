import * as actions from "../../pages/App/Products/actions";

const initialState = {
  productList: [],
  userProductList: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        error: null,
      };
    case actions.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.FETCH_USER_PRODUCTS_SUCCESS:
      return {
        ...state,
        userProductList: action.payload,
        error: null,
      };
    case actions.FETCH_USER_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
