import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userName: userData.userName,
    email: userData.email,
    userImage: userData.userImage
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_INITIATE_LOGOUT
  };
};

export const logoutAction = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authenticate = (email, password) => {
  //Call Authenticate in Saga
  return {
    type: actionTypes.AUTH_INITIATE,
    email: email,
    password: password
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT,
    path: path
  };
};

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK
  };
};
