import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess
} from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data }));
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err.message));
  }
}

export function* isAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

export function* isSignout() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailure(e.message));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (e) {
    yield put(signUpFailure(e.message));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* onSignout() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, isSignout);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignout),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
