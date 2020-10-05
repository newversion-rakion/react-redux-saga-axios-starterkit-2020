/*
 *
 * Job reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const jobsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_JOBS_PENDING:
        return { ...state, loading: true };
      case GET_JOBS_SUCCESS:
        return { ...state, jobList: action.respond.data.jobs, loading: false };
      case GET_JOBS_ERROR:
        return { ...state, loading: false };
    }
  });

export default jobsReducer;
