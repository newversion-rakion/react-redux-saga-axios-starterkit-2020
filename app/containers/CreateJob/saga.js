import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import {
  getProfesstionsSuccess,
  getProfesstionsError,
  getLocationsSuccess,
  getLocationsError,
  createJobSuccess,
  createJobError,
} from './actions';
import {
  GET_PROFESSIONS_PENDING,
  GET_LOCATIONS_PENDING,
  CREATE_JOB_PENDING,
} from './constants';

export function* getProfesstions() {
  const payload = {
    url: '/professions',
    params: null,
    apiName: 'get professtions',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getProfesstionsSuccess(respond));
  } catch (err) {
    yield put(getProfesstionsError(err));
  }
}

export function* getLocations() {
  const payload = {
    url: '/locations',
    params: null,
    apiName: 'get locations',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getLocationsSuccess(respond));
  } catch (err) {
    yield put(getLocationsError(err));
  }
}

export function* createJob(action) {
  const payload = {
    url: '/jobs/create_job',
    params: null,
    data: action.data,
    apiName: 'create job',
  };
  try {
    const respond = yield call(Api.post, payload);
    yield put(createJobSuccess(respond));
  } catch (err) {
    yield put(createJobError(err));
  }
}

export default function* watchAll() {
  yield all([takeLatest(GET_PROFESSIONS_PENDING, getProfesstions)]);
  yield all([takeLatest(GET_LOCATIONS_PENDING, getLocations)]);
  yield all([takeLatest(CREATE_JOB_PENDING, createJob)]);
}
