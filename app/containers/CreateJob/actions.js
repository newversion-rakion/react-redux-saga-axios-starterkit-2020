/*
 *
 * CreateJob actions
 *
 */

import {
  RESET_CREATEJOBDATA_REDUCER,
  GET_PROFESSIONS_PENDING,
  GET_PROFESSIONS_SUCCESS,
  GET_PROFESSIONS_ERROR,
  GET_LOCATIONS_PENDING,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_ERROR,
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: RESET_CREATEJOBDATA_REDUCER,
  };
}

export function getProfesstions() {
  return {
    type: GET_PROFESSIONS_PENDING,
  };
}

export function getProfesstionsSuccess(respond) {
  return {
    type: GET_PROFESSIONS_SUCCESS,
    respond,
  };
}

export function getProfesstionsError(error) {
  return {
    type: GET_PROFESSIONS_ERROR,
    error,
  };
}

export function getLocations() {
  return {
    type: GET_LOCATIONS_PENDING,
  };
}

export function getLocationsSuccess(respond) {
  return {
    type: GET_LOCATIONS_SUCCESS,
    respond,
  };
}

export function getLocationsError(error) {
  return {
    type: GET_LOCATIONS_ERROR,
    error,
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
