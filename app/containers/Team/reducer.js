/*
 *
 * Team reducer
 *
 */
import produce from 'immer';
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

export const initialState = {
  loading: false,
  inviteData: {},
  teamData: {},
};

/* eslint-disable default-case, no-param-reassign */
const teamReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case INVITE_PENDING:
        return { ...state, loading: true };
      case INVITE_SUCCESS:
        return { ...state, inviteData: action.respond, loading: false };
      case INVITE_ERROR:
        return { ...state, loading: false };
      case RESEND_INVITE_PENDING:
        return { ...state, loading: true };
      case RESEND_INVITE_SUCCESS:
        return { ...state, inviteData: action.respond, loading: false };
      case RESEND_INVITE_ERROR:
        return { ...state, loading: false };
      case CANCEL_INVITE_PENDING:
        return { ...state, loading: true };
      case CANCEL_INVITE_SUCCESS:
        return { ...state, inviteData: action.respond, loading: false };
      case CANCEL_INVITE_ERROR:
        return { ...state, loading: false };
      case GET_TEAM_PENDING:
        return { ...state, loading: true };
      case GET_TEAM_SUCCESS:
        return { ...state, teamData: action.respond.data, loading: false };
      case GET_TEAM_ERROR:
        return { ...state, loading: false };
    }
  });

export default teamReducer;
