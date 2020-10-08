/*
 *
 * EditJob actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_JOB_DETAIL_PENDING,
  GET_JOB_DETAIL_SUCCESS,
  GET_JOB_DETAIL_ERROR,
} from './constants';

export function editJob() {
  return false;
}

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
