import { takeLatest, put, call, all } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  facebookProvider,
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

function* getSnapshotFromUserAuth(userAuth, history, from) {
  try {
    const userRef = yield createUserProfileOnFirebase(userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    history.push(from);
  } catch (error) {
    yield put(call(signInError, error));
  }
}
function* signUpAndLoginNewUser({
  payload: { email, password, displayName, history },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess());
    yield getSnapshotFromUserAuth({ ...user, displayName }, history);
  } catch (error) {
    yield put(signUpError(error.message));
  }
}
function* signInwithGoogle({ payload: { history, from } }) {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user, history, from);
  } catch (error) {
    yield put(call(signInError, error.message));
  }
}
function* signInwithFacebook({ payload: { history, from } }) {
  try {
    const { user } = yield auth.signInWithPopup(facebookProvider);
    yield call(getSnapshotFromUserAuth, user, history, from);
  } catch (error) {
    yield put(call(signInError, error.message));
  }
}
function* signInWithEmailAndPassword({
  payload: { email, password, history, from },
}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user, history, from);
  } catch (error) {
    yield put(call(signInError, error));
  }
}
function* onUserStateChanged({ payload: { history, from } }) {
  const userAuth = yield call(getCurrentUser);
  try {
    if (userAuth) {
      yield call(getSnapshotFromUserAuth, userAuth, history, from);
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
export function* onFacebookSignInStart() {
  yield takeLatest(userActionTypes.FACEBOOK_SIGNIN_START, signInwithFacebook);
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
    call(onFacebookSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
