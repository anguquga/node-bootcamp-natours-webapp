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
    case actionTypes.UPDATE_USER_FAIL: {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }
    case actionTypes.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        userImage: action.photo,
        userName: action.name
      };
    }
    case actionTypes.UPDATE_USER_INIT: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case actionTypes.UPDATE_USER_PASSWORD_FAIL: {
      return {
        ...state,
        error: action.error,
        loading: false
      };
    }
    case actionTypes.UPDATE_USER_PASSWORD_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false
      };
    }
    case actionTypes.UPDATE_USER_PASSWORD_INIT: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case actionTypes.DELETE_ME_PROCESS: {
      const init = action.init;
      let loading = false;
      let error = action.error;
      if (init) {
        loading = true;
      }
      return {
        ...state,
        loading: init,
        error: error
      };
    }

    default:
      return state;
  }
};

export default reducer;
