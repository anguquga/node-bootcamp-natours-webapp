import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userName: null,
  userImage: null,
  email: null,
  error: null,
  loading: false,
  timer: null,
  authRedirectPath: '/'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: {
      return {
        ...state,
        error: null,
        loading: true,
        token: null,
        userName: null,
        userImage: null,
        email: null
      };
    }
    case actionTypes.AUTH_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        token: action.token,
        userName: action.userName,
        email: action.email,
        userImage: action.userImage
      };
    }
    case actionTypes.AUTH_FAIL: {
      return {
        ...state,
        error: action.error,
        loading: false,
        token: null,
        userName: null,
        userImage: null,
        email: null
      };
    }
    case actionTypes.AUTH_LOGOUT: {
      return {
        ...state,
        token: null,
        userName: null,
        userImage: null,
        email: null,
        timer: null
      };
    }
    case actionTypes.SET_AUTH_REDIRECT: {
      return {
        ...state,
        authRedirectPath: action.path
      };
    }
    default:
      return state;
  }
};

export default reducer;
