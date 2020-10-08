/*
 *
 * Job actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getJobs() {
  return {
    type: GET_JOBS_PENDING,
  };
}

export function getJobsSuccess(respond) {
  return {
    type: GET_JOBS_SUCCESS,
    respond,
  };
}

export function getJobsError(error) {
  return {
    type: GET_JOBS_ERROR,
    error,
  };
}
