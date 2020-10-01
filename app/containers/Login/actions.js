/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function login() {
  return {
    type: LOGIN_PENDING,
  };
}

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
