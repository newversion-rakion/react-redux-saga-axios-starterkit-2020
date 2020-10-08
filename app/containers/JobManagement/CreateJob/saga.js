import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import {
  getProfessionsSuccess,
  getProfessionsError,
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

export function* getProfessions() {
  const payload = {
    url: '/professions',
    params: null,
    apiName: 'get professions',
  };
  try {
    const respond = yield call(Api.get, payload);
    yield put(getProfessionsSuccess(respond));
  } catch (err) {
    yield put(getProfessionsError(err));
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
  const dataJSON = action.data;
  const data = new FormData();

  data.append('cover_photo_file', [...dataJSON.cover_photo_file][0]);
  delete dataJSON.cover_photo_file;

  Object.entries(dataJSON).forEach(entry => {
    const [key, value] = entry;
    data.append(key, value);
  });

  const payload = {
    url: '/jobs/create_job',
    params: null,
    data,
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
  yield all([takeLatest(GET_PROFESSIONS_PENDING, getProfessions)]);
  yield all([takeLatest(GET_LOCATIONS_PENDING, getLocations)]);
  yield all([takeLatest(CREATE_JOB_PENDING, createJob)]);
}
