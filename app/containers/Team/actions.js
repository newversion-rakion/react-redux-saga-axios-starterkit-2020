/*
 *
 * Team actions
 *
 */

import {
  DEFAULT_ACTION,
  INVITE_PENDING,
  INVITE_SUCCESS,
  INVITE_ERROR,
  RESEND_INVITE_PENDING,
  RESEND_INVITE_SUCCESS,
  RESEND_INVITE_ERROR,
  CANCEL_INVITE_PENDING,
  CANCEL_INVITE_SUCCESS,
  CANCEL_INVITE_ERROR,
  GET_TEAM_PENDING,
  GET_TEAM_SUCCESS,
  GET_TEAM_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function invite(data) {
  return {
    type: INVITE_PENDING,
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

export function resendInvite(data) {
  return {
    type: RESEND_INVITE_PENDING,
    data,
  };
}

export function resendInviteSuccess(respond) {
  return {
    type: RESEND_INVITE_SUCCESS,
    respond,
  };
}

export function resendInviteError(error) {
  return {
    type: RESEND_INVITE_ERROR,
    error,
  };
}

export function cancelInvite(data) {
  return {
    type: CANCEL_INVITE_PENDING,
    data,
  };
}

export function cancelInviteSuccess(respond) {
  return {
    type: CANCEL_INVITE_SUCCESS,
    respond,
  };
}

export function cancelInviteError(error) {
  return {
    type: CANCEL_INVITE_ERROR,
    error,
  };
}

export function getTeam() {
  return {
    type: GET_TEAM_PENDING,
  };
}

export function getTeamSuccess(respond) {
  return {
    type: GET_TEAM_SUCCESS,
    respond,
  };
}

export function getTeamError(error) {
  return {
    type: GET_TEAM_ERROR,
    error,
  };
}
