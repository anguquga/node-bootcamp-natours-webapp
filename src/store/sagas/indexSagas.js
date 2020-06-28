import { takeEvery } from 'redux-saga/effects';

import * as authSagas from './authSaga';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, authSagas.logoutSaga);
  yield takeEvery(
    actionTypes.AUTH_CHECK_TIMEOUT,
    authSagas.checkAuthTimeoutSaga
  );
  yield takeEvery(actionTypes.AUTH_INITIATE, authSagas.authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK, authSagas.authCheckStateSaga);
}
