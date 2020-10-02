/*
 *
 * Team actions
 *
 */

import {
  DEFAULT_ACTION,
  API_PENDING,
  INVITE_SUCCESS,
  INVITE_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function invite(data) {
  return {
    type: API_PENDING,
    data,
  };
}

export function inviteSuccess(respond) {
  return {
    type: INVITE_SUCCESS,
    respond,
  };
}

export function inviteError(error) {
  return {
    type: INVITE_ERROR,
    error,
  };
}
