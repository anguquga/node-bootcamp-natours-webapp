import { takeEvery } from 'redux-saga/effects';

import * as authSagas from './authSaga';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, authSagas.logoutSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE, authSagas.authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK, authSagas.authCheckStateSaga);
  yield takeEvery(actionTypes.SIGN_UP_INIT, authSagas.signUpSaga);
  yield takeEvery(
    actionTypes.UPDATE_USER_PASSWORD,
    authSagas.updateUserPassword
  );
  yield takeEvery(actionTypes.UPDATE_USER, authSagas.updateUser);
  yield takeEvery(actionTypes.DELETE_ME, authSagas.deleteMe);
}
