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

export const signUp = (name, email, password, passwordConfirm) => {
  return {
    type: actionTypes.SIGN_UP_INIT,
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm
  };
};

export const updateUser = (email, name, image) => {
  return {
    type: actionTypes.UPDATE_USER,
    name: name,
    email: email,
    photo: image
  };
};

export const updateUserInit = () => {
  return {
    type: actionTypes.UPDATE_USER_INIT
  };
};

export const updateUserFail = (error) => {
  return {
    type: actionTypes.UPDATE_USER_FAIL,
    error: error
  };
};

export const updateUserSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    name: data.name,
    photo: data.photo
  };
};

export const updateUserPassword = (
  currentPassword,
  password,
  passwordConfirm
) => {
  return {
    type: actionTypes.UPDATE_USER_PASSWORD,
    oldPassword: currentPassword,
    password: password,
    passwordConfirm: passwordConfirm
  };
};

export const updateUserPasswordInit = () => {
  return {
    type: actionTypes.UPDATE_USER_PASSWORD_INIT
  };
};

export const updateUserPasswordFail = (error) => {
  return {
    type: actionTypes.UPDATE_USER_PASSWORD_FAIL,
    error: error
  };
};

export const updateUserPasswordSuccess = () => {
  return {
    type: actionTypes.UPDATE_USER_PASSWORD_SUCCESS
  };
};

export const deleteMe = () => {
  return {
    type: actionTypes.DELETE_ME
  };
};

export const deleteMeProcess = (init, error) => {
  return {
    type: actionTypes.DELETE_ME_PROCESS,
    init: init,
    error: error
  };
};
