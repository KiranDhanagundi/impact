import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../../pages/App/Products/actions";

function* fetchProducts() {
  try {
    const response = yield call(fetch, "/v1/products", { method: "GET" });
    const data = yield response.json();
    yield put(actions.fetchProductsSuccess(data));
  } catch (error) {
    yield put(actions.fetchProductsFailure(error));
  }
}

export function* watchFecthProducts() {
  yield takeLatest(actions.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

function* fetchUserProducts() {
  try {
    const response = yield call(fetch, "/v1/products/search", {
      method: "GET",
      query: "active:'true' AND metadata['user_id']:'Kiran123'",
    });
    const data = yield response.json();
    yield put(actions.fetchUSerProductsSuccess(data));
  } catch (error) {
    yield put(actions.fetchUSerProductsFailure(error));
  }
}

export function* watchFecthUserProducts() {
  yield takeLatest(actions.FETCH_USER_PRODUCTS_REQUEST, fetchUserProducts);
}
