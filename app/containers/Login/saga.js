import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { loginSuccess, loginError } from './actions';
import { LOGIN_PENDING } from './constants';

export function* login(action) {
  const payload = { url: '/generate_token', params: null, data: action.data };
  try {
    const respond = yield call(Api.post, payload);
    yield put(loginSuccess(respond));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* loginData() {
  yield takeLatest(LOGIN_PENDING, login);
}
