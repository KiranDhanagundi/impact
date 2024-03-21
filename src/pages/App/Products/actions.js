export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const FETCH_USER_PRODUCTS_REQUEST = "FETCH_USER_PRODUCTS_REQUEST";
export const FETCH_USER_PRODUCTS_SUCCESS = "FETCH_USER_PRODUCTS_SUCCESS";
export const FETCH_USER_PRODUCTS_FAILURE = "FETCH_USER_PRODUCTS_FAILURE";

// Fetch Products By User
export const fetchUerProductsRequest = () => ({
  type: FETCH_USER_PRODUCTS_REQUEST,
});

export const fetchUSerProductsSuccess = (data) => ({
  type: FETCH_USER_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchUSerProductsFailure = (error) => ({
  type: FETCH_USER_PRODUCTS_FAILURE,
  payload: error,
});

// Fetch All Products list
export const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
