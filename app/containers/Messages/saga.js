import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as Api from 'utils/request';
import { getMessagesSuccess, getMessagesError } from './actions';
import { GET_MESSAGES_PENDING } from './constants';

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
  yield all([takeLatest(GET_MESSAGES_PENDING, getMessages)]);
}
