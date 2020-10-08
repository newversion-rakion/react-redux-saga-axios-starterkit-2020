import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import {
  getJobDetailSuccess,
  getJobDetailError,
  editJobSuccess,
  editJobError,
} from './actions';
import { GET_JOB_DETAIL_PENDING, EDIT_JOB_PENDING } from './constants';

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

export function* editJob(action) {
  const dataJSON = action.data;
  dataJSON.profession = dataJSON.profession.id;
  dataJSON.location = dataJSON.location.id;

  const data = new FormData();

  data.append('cover_photo_file', [...dataJSON.cover_photo_file][0]);
  delete dataJSON.cover_photo_file;

  Object.entries(dataJSON).forEach(entry => {
    const [key, value] = entry;
    data.append(key, value);
  });

  const payload = {
    url: `/jobs/${action.jobId}/update_job`,
    params: null,
    data,
    apiName: 'edit job',
  };

  try {
    const respond = yield call(Api.post, payload);
    yield put(editJobSuccess(respond));
  } catch (err) {
    yield put(editJobError(err));
  }
}

export default function* watchAll() {
  yield all([takeLatest(GET_JOB_DETAIL_PENDING, getJobDetail)]);
  yield all([takeLatest(EDIT_JOB_PENDING, editJob)]);
}
