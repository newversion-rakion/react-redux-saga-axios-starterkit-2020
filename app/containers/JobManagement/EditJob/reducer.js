/*
 *
 * EditJob reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_JOB_DETAIL_PENDING,
  GET_JOB_DETAIL_SUCCESS,
  GET_JOB_DETAIL_ERROR,
  EDIT_JOB_PENDING,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
} from './constants';

export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const editJobReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_JOB_DETAIL_PENDING:
        return { ...state, loading: true };
      case GET_JOB_DETAIL_SUCCESS:
        return { ...state, jobDetail: action.respond.data, loading: false };
      case GET_JOB_DETAIL_ERROR:
        return { ...state, loading: false };
      case EDIT_JOB_PENDING:
        return { ...state, loading: true };
      case EDIT_JOB_SUCCESS:
        return { ...state, loading: false };
      case EDIT_JOB_ERROR:
        return { ...state, loading: false };
    }
  });

export default editJobReducer;
