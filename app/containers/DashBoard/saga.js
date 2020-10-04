import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { getDashboardSuccess, getDashboardError } from './actions';
import { GET_DASHBOARD_PENDING } from './constants';

export function* getDashboard() {
  const payload = {
    url: '/dashboard',
    params: null,
    apiName: 'get dashboard data',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getDashboardSuccess(respond));
  } catch (err) {
    yield put(getDashboardError(err));
  }
}

// watching...
export default function* watchAll() {
  yield all([takeLatest(GET_DASHBOARD_PENDING, getDashboard)]);
}
