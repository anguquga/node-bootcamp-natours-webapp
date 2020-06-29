import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions/actionsIndex';
import { setAuthToken } from '../../axios-natours';
import axiosNatours from '../../axios-natours';

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'userName');
  yield call([localStorage, 'removeItem'], 'userImage');
  yield call([localStorage, 'removeItem'], 'email');
  yield setAuthToken(); //Elimina el token de los headers
  yield put(actions.logoutAction());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expiresIn * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  let urlLogin = process.env.REACT_APP_API_USERS + '/login';
  let urlMe = process.env.REACT_APP_API_USERS + '/me';

  try {
    const response = yield axiosNatours.post(urlLogin, {
      email: action.email,
      password: action.password
    });
    if (response) {
      console.log(response);
      yield localStorage.setItem('token', response.data.token);
      yield setAuthToken(response.data.token);
      const responseMe = yield axiosNatours.get(
        urlMe /*, {
        headers: { Authorization: `Bearer ${response.data.token}` }
      }*/
      );
      console.log(responseMe);
      yield localStorage.setItem('userName', responseMe.data.data.User.name);
      yield localStorage.setItem('userImage', responseMe.data.data.User.photo);
      yield localStorage.setItem('email', responseMe.data.data.User.email);
      const userData = {
        userName: responseMe.data.data.User.name,
        userImage: responseMe.data.data.User.photo,
        email: responseMe.data.data.User.email
      };
      yield put(actions.authSuccess(response.data.token, userData));
    }
  } catch (error) {
    yield call([localStorage, 'removeItem'], 'token');
    yield put(actions.authFail('Error'));
  }
}

export function* authCheckStateSaga(action) {
  const token = localStorage.getItem('token');
  if (!token) {
    yield put(actions.logout());
  } else {
    const userData = {
      userName: localStorage.getItem('userName'),
      userImage: localStorage.getItem('userImage'),
      email: localStorage.getItem('email')
    };
    yield put(actions.authSuccess(token, userData));
  }
}
