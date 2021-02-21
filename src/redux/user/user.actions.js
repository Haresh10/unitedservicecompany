import userActionTypes from "./user.action.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});
export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
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
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});
export const signUpStart = (emailDisplayNameAndPassword) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: emailDisplayNameAndPassword,
});
export const signUpSuccess = () => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
});
export const signUpError = (error) => ({
  type: userActionTypes.SIGN_UP_ERROR,
  payload: error,
});
