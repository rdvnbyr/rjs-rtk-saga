import { all } from 'redux-saga/effects';
import { loginSaga } from './api/auth-api';

export function* rootSaga() {
  yield all([loginSaga()]);
}
