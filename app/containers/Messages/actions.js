/*
 *
 * Messages actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
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
