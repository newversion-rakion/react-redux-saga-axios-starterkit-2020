import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { createJobSuccess, createJobError } from './actions';
import { CREATE_JOB_PENDING } from './constants';

export function* createJob(action) {
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
  yield all([takeLatest(CREATE_JOB_PENDING, createJob)]);
}
