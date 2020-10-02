import { call, put, takeLatest } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { inviteSuccess, inviteError } from './actions';
import { API_PENDING } from './constants';
export function* invite(action) {
  const payload = { url: '/teams/invite?', params: null, data: action.data };
  try {
    const respond = yield call(Api.post, payload);
    yield put(inviteSuccess(respond));
  } catch (err) {
    yield put(inviteError(err));
  }
}

export default function* loginData() {
  yield takeLatest(API_PENDING, invite);
}
