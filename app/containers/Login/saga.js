import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { loginSuccess, loginError } from './actions';
import { LOGIN_PENDING } from './constants';

export function* login(action) {
  const payload = {
    url: '/login',
    params: null,
    data: action.data,
    apiName: 'login',
  };
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
