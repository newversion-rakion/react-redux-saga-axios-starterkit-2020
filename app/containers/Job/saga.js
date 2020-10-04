import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { getJobsSuccess, getJobsError } from './actions';
import { GET_JOBS_PENDING } from './constants';

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

export default function* watchAll() {
  yield all([takeLatest(GET_JOBS_PENDING, getJobs)]);
}
