/*
 *
 * DashBoard reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  jobs: [],
  messages: [],
};

/* eslint-disable default-case, no-param-reassign */
const dashBoardReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_JOBS_PENDING:
        return { ...state, loading: true };
      case GET_JOBS_SUCCESS:
        return { ...state, jobs: action.respond.data.jobs, loading: false };
      case GET_JOBS_ERROR:
        return { ...state, loading: false };
      case GET_MESSAGES_PENDING:
        return { ...state, loading: true };
      case GET_MESSAGES_SUCCESS:
        return {
          ...state,
          messages: action.respond.data.messages,
          loading: false,
        };
      case GET_MESSAGES_ERROR:
        return { ...state, loading: false };
    }
  });

export default dashBoardReducer;
