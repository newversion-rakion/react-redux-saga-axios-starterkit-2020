/*
 *
 * DashBoard actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
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

export function getMessages() {
  return {
    type: GET_MESSAGES_PENDING,
  };
}

export function getMessagesSuccess(respond) {
  return {
    type: GET_MESSAGES_SUCCESS,
    respond,
  };
}

export function getMessagesError(error) {
  return {
    type: GET_MESSAGES_ERROR,
    error,
  };
}
