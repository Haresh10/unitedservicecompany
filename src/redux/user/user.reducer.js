import userActionTypes from "./user.action.types";
const INITIAL_STATE = {
  currentUser: null,
  error: undefined,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGNIN_ERROR:
    case userActionTypes.SIGNOUT_ERROR:
    case userActionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case userActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};
export default userReducer;
