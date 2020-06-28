import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
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

export const setTimer = (timer) => {
  return {
    type: actionTypes.AUTH_TIMER,
    timer: timer
  };
};

export const checkAuthTimeout = (expiresIn) => {
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expiresIn: expiresIn
  };
};

export const authenticate = (email, password, isSignUp) => {
  //Call Authenticate in Saga
  return {
    type: actionTypes.AUTH_INITIATE,
    email: email,
    password: password,
    isSignUp: isSignUp
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
