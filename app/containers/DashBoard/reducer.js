/*
 *
 * DashBoard reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_DASHBOARD_PENDING,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  jobs: [],
  messages: [],
  unreadMessagesCount: 0,
  dashboard: {},
};

/* eslint-disable default-case, no-param-reassign */
const dashBoardReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_DASHBOARD_PENDING:
        return { ...state, loading: true };
      case GET_DASHBOARD_SUCCESS:
        return {
          ...state,
          jobs: action.respond.data.jobs,
          messages: action.respond.data.list_messages.messages,
          unreadMessagesCount:
            action.respond.data.list_messages.unread_messages_count,
          loading: false,
        };
      case GET_DASHBOARD_ERROR:
        return { ...state, loading: false };
    }
  });

export default dashBoardReducer;
