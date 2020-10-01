import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { ROOT_URI } from 'utils/constants';
import { loginSuccess, loginError } from './actions';
import { LOGIN_PENDING } from './constants';

export function* login() {
  // Select username from store
  const requestURL = `${ROOT_URI}/generate_token`;

  try {
    const repos = yield call(request, requestURL);
    yield put(loginSuccess(repos));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* loginData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_PENDING, login);
}
