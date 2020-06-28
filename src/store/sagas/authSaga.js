import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions/actionsIndex';
import axios from 'axios';

export function* logoutSaga(action) {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'expirationDate');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(actions.logoutAction());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expiresIn * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  let apiKey = 'AIzaSyBqyTcORCbvjABe6T50V62rA2WBEyK1vdY';
  let url = action.isSignUp
    ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

  try {
    const response = yield axios.post(url + apiKey, {
      email: action.email,
      password: action.password,
      returnSecureToken: true
    });
    const expirationDate = new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    );
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(
      actions.authSuccess(response.data.idToken, response.data.localId)
    );
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authFail(error.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = localStorage.getItem('token');
  if (!token) {
    yield put(actions.logout());
  } else {
    /*const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate < new Date()) {
      yield put(actions.logout());
    } else {*/
    const userId = localStorage.getItem('userId');
    yield put(actions.authSuccess(token, userId));
    /*yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );*/
    //}
  }
}
