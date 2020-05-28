import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth, * as authSelectors from "./auth";
import createUser, * as createUserSelectors from "./createuser";

const reducer = combineReducers({
  auth,
  createUser,
  form: formReducer,
});

export default reducer;

// Auth Selectors
export const getAuthToken = (state) => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = (state) =>
  authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = (state) =>
  authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = (state) => getAuthToken(state) != null;
export const getAuthUserID = (state) => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = (state) =>
  authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = (state) =>
  authSelectors.getAuthUsername(state.auth);
export const getIsRefreshingToken = (state) =>
  authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = (state) =>
  authSelectors.getRefreshingError(state.auth);

// Create User Selectors
export const getCreatingUserErrorMsg = (state) =>
  createUserSelectors.getErrorMsg(state.createUser);
export const getIsCreatingUser = (state) =>
  createUserSelectors.getIsLoading(state.createUser);
