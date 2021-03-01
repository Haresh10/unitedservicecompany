import userActionTypes from "./user.types";

export const googleSignInStart = (history) => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
  payload: history,
});
export const emailSignInStart = (emailAndPasswordAndHistory) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPasswordAndHistory,
});
export const signInSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});
export const signInError = (error) => ({
  type: userActionTypes.SIGNIN_ERROR,
  payload: error.message,
});
export const signOutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
});
export const signOutSucess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});
export const signOutError = (error) => ({
  type: userActionTypes.SIGNOUT_ERROR,
  payload: error,
});
export const checkUserSession = (history) => ({
  type: userActionTypes.CHECK_USER_SESSION,
  payload: history,
});
export const signUpStart = (emailDisplayNamePasswordAndHistory) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: emailDisplayNamePasswordAndHistory,
});
export const signUpSuccess = () => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
});
export const signUpError = (error) => ({
  type: userActionTypes.SIGN_UP_ERROR,
  payload: error,
});
