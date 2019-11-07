import { all, put, takeLatest, call } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";

import { clearCart } from "./cart.action";
export function* isClearCart() {
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, isClearCart);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
