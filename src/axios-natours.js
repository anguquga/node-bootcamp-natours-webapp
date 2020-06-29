import axios from 'axios';
import * as actionTypes from './store/actions/actionTypes';

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_API_PROTOCOL +
    '://' +
    process.env.REACT_APP_API_URL +
    ':' +
    process.env.REACT_APP_API_PORT,
  headers: {
    'Content-Type': 'application/json'
  }
});
// Set the AUTH token for any request
/*instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});*/

export const setupInterceptors = (store) => {
  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      //catches if the session ended!
      /*if ( error.response.data.token.KEY == 'ERR_EXPIRED_TOKEN') {
            console.log("EXPIRED TOKEN!");
            localStorage.clear();
            store.dispatch({ type: UNAUTH_USER });
        }*/

      if (error.response.status === 401) {
        store.dispatch({
          type: actionTypes.AUTH_FAIL,
          error: error.response.data.message
        });
      }
      return Promise.reject(error);
    }
  );
};

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common['Authorization'];
  }
};

export default instance;
