/*
 *
 * CreateJob actions
 *
 */

import {
  RESET_CREATE_JOBDATA_REDUCER,
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: RESET_CREATE_JOBDATA_REDUCER,
  };
}

export function createJob(data) {
  return {
    type: CREATE_JOB_PENDING,
    data,
  };
}

export function createJobSuccess(respond) {
  return {
    type: CREATE_JOB_SUCCESS,
    respond,
  };
}

export function createJobError(error) {
  return {
    type: CREATE_JOB_ERROR,
    error,
  };
}
