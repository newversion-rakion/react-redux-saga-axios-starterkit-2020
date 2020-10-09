/*
 *
 * EditJob actions
 *
 */
import history from 'utils/history';
import {
  DEFAULT_ACTION,
  GET_JOB_DETAIL_PENDING,
  GET_JOB_DETAIL_SUCCESS,
  GET_JOB_DETAIL_ERROR,
  EDIT_JOB_PENDING,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getJobDetail(data) {
  return {
    type: GET_JOB_DETAIL_PENDING,
    data,
  };
}

export function getJobDetailSuccess(respond) {
  return {
    type: GET_JOB_DETAIL_SUCCESS,
    respond,
  };
}

export function getJobDetailError(error) {
  return {
    type: GET_JOB_DETAIL_ERROR,
    error,
  };
}

export function editJob(data) {
  return {
    type: EDIT_JOB_PENDING,
    data,
  };
}

export function editJobSuccess(respond) {
  history.push('/company/jobs');
  return {
    type: EDIT_JOB_SUCCESS,
    respond,
  };
}

export function editJobError(error) {
  return {
    type: EDIT_JOB_ERROR,
    error,
  };
}
