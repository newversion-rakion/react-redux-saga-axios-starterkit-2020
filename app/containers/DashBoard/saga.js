import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import {
  getJobsSuccess,
  getJobsError,
  getMessagesSuccess,
  getMessagesError,
} from './actions';
import { GET_JOBS_PENDING, GET_MESSAGES_PENDING } from './constants';

export function* getJobs() {
  const payload = {
    url: '/jobs',
    params: null,
    apiName: 'get jobs',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getJobsSuccess(respond));
  } catch (err) {
    yield put(getJobsError(err));
  }
}

export function* getMessages() {
  const payload = {
    url: '/messages',
    params: null,
    apiName: 'get messages',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getMessagesSuccess(respond));
  } catch (err) {
    yield put(getMessagesError(err));
  }
}

// watching...
export default function* watchAll() {
  yield all([takeLatest(GET_JOBS_PENDING, getJobs)]);
  yield all([takeLatest(GET_MESSAGES_PENDING, getMessages)]);
}
