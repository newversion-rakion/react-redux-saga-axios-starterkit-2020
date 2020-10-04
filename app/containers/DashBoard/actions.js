/*
 *
 * DashBoard actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_DASHBOARD_PENDING,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDashboard() {
  return {
    type: GET_DASHBOARD_PENDING,
  };
}

export function getDashboardSuccess(respond) {
  return {
    type: GET_DASHBOARD_SUCCESS,
    respond,
  };
}

export function getDashboardError(error) {
  return {
    type: GET_DASHBOARD_ERROR,
    error,
  };
}
