import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import {
  inviteSuccess,
  inviteError,
  resendInviteSuccess,
  resendInviteError,
  cancelInviteSuccess,
  cancelInviteError,
  getTeamSuccess,
  getTeamError,
} from './actions';
import {
  INVITE_PENDING,
  RESEND_INVITE_PENDING,
  CANCEL_INVITE_PENDING,
  GET_TEAM_PENDING,
} from './constants';

export function* invite(action) {
  const payload = {
    url: '/teams/invite?',
    params: null,
    data: action.data,
    apiName: 'invite',
  };
  try {
    const respond = yield call(Api.post, payload);
    yield put(inviteSuccess(respond));
  } catch (err) {
    yield put(inviteError(err));
  }
}

export function* resendInvite(action) {
  const payload = {
    url: `/teams/${action.data}/resend_invite`,
    params: null,
    data: null,
    apiName: 'resend invite',
  };
  try {
    const respond = yield call(Api.post, payload);
    yield put(resendInviteSuccess(respond));
  } catch (err) {
    yield put(resendInviteError(err));
  }
}

export function* cancelInvite(action) {
  const payload = {
    url: `/teams/${action.data}/cancel_invite`,
    params: null,
    data: null,
    apiName: 'cancel invite',
  };
  try {
    const respond = yield call(Api.post, payload);
    yield put(cancelInviteSuccess(respond));
  } catch (err) {
    yield put(cancelInviteError(err));
  }
}

export function* getTeam() {
  const payload = {
    url: '/teams',
    params: null,
    apiName: 'get team',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getTeamSuccess(respond));
  } catch (err) {
    yield put(getTeamError(err));
  }
}

// watching...
export default function* watchAll() {
  yield all([
    takeLatest(INVITE_PENDING, invite),
    takeLatest(RESEND_INVITE_PENDING, resendInvite),
    takeLatest(CANCEL_INVITE_PENDING, cancelInvite),
    takeLatest(GET_TEAM_PENDING, getTeam),
  ]);
}
