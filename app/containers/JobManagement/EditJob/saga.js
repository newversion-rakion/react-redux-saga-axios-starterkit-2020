import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { getJobDetailSuccess, getJobDetailError } from './actions';
import { GET_JOB_DETAIL_PENDING } from './constants';

export function* getJobDetail(action) {
  const payload = {
    url: `/jobs/${action.data}/detail`,
    params: null,
    apiName: 'get professions',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getJobDetailSuccess(respond));
  } catch (err) {
    yield put(getJobDetailError(err));
  }
}

export default function* watchAll() {
  yield all([takeLatest(GET_JOB_DETAIL_PENDING, getJobDetail)]);
}
