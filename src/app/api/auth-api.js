import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  login,
  loginFailure,
  loginSuccess,
  ping,
  pingFailure,
  pingSuccess,
  register,
  registerFailure,
  registerSuccess,
} from '../../features/auth/authSlice';

const api_url = 'http://localhost:8080/api';

function* workLogin(action) {
  try {
    const { email, password } = action.payload;
    const user = yield call(() =>
      axios.post(`${api_url}/users/login`, { email, password })
    );
    yield put(loginSuccess(user.data));
  } catch (e) {
    if (e.response) {
      yield put(loginFailure(e.response.data));
    } else {
      yield put(loginFailure(e?.message || 'Unknown error'));
    }
  }
}

function* workRegister(action) {
  try {
    const { email, password , username} = action.payload;
    const user = yield call(() =>
      axios.post(`${api_url}/users/register`, { email, password, username })
    );
    yield put(registerSuccess(user));
  } catch (e) {
    if (e.response) {
      yield put(registerFailure(e.response.data));
    } else {
      yield put(registerFailure(e?.message || 'Unknown error'));
    }
  }
}

function* workPing() {
  try {
    const user = yield call(() => axios.get(`${api_url}/ping`));
    yield put(pingSuccess(user));
  } catch (e) {
    if (e.response) {
      yield put(pingFailure(e.response.data));
    } else {
      yield put(pingFailure(e?.message || 'Unknown error'));
    }
  }
}

export function* loginSaga() {
  yield takeEvery(login.type, workLogin);
  yield takeEvery(ping.type, workPing);
  yield takeEvery(register.type, workRegister);
}
