import { takeLatest, put, call, all } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileOnFirebase,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInError,
  signInSuccess,
  signOutError,
  signOutSucess,
  signUpError,
  signUpSuccess,
} from "./user.actions";

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield createUserProfileOnFirebase(userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(call(signInError, error));
  }
}
function* signUpAndLoginNewUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess());
    yield getSnapshotFromUserAuth({ ...user, displayName });
  } catch (error) {
    yield put(signUpError(error.message));
  }
}
function* signInwithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(call(signInError, error));
  }
}
function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(call(signInError, error));
  }
}
function* onUserStateChanged() {
  const userAuth = yield call(getCurrentUser);
  try {
    if (userAuth) {
      yield call(getSnapshotFromUserAuth, userAuth);
    }
  } catch (error) {
    put(call(signInError, error.message));
  }
}
function* signOutCurrentUser() {
  try {
    yield auth.signOut();
    yield put(signOutSucess());
  } catch (error) {
    yield put(call(signOutError, error.message));
  }
}
function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpAndLoginNewUser);
}
export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInwithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGNIN_START,
    signInWithEmailAndPassword
  );
}
export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, onUserStateChanged);
}
export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signOutCurrentUser);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
