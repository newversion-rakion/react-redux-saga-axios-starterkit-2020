import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import {
  getProfessionsSuccess,
  getProfessionsError,
  getLocationsSuccess,
  getLocationsError,
} from './actions';
import { GET_PROFESSIONS_PENDING, GET_LOCATIONS_PENDING } from './constants';

export function* getProfessions() {
  const payload = {
    url: '/professions',
    params: null,
    apiName: 'get professions',
  };
  try {
    const respond = yield call(Api.get, payload);
    const prosessedData = respond.data.map(({ name: label, ...rest }) => ({
      label,
      ...rest,
    }));
    respond.data = prosessedData;
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
    const prosessedData = respond.data.map(({ name: label, ...rest }) => ({
      label,
      ...rest,
    }));
    respond.data = prosessedData;
    yield put(getLocationsSuccess(respond));
  } catch (err) {
    yield put(getLocationsError(err));
  }
}

export default function* watchAll() {
  yield all([takeLatest(GET_PROFESSIONS_PENDING, getProfessions)]);
  yield all([takeLatest(GET_LOCATIONS_PENDING, getLocations)]);
}
