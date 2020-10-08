/*
 *
 * CreateJob reducer
 *
 */
import produce from 'immer';
import {
  RESET_CREATE_JOBDATA_REDUCER,
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
} from './constants';

export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const createJobReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case RESET_CREATE_JOBDATA_REDUCER:
        return {
          loading: false,
          professions: [],
          locations: [],
        };
      case CREATE_JOB_PENDING:
        return { ...state, loading: true };
      case CREATE_JOB_SUCCESS:
        return { ...state, loading: false };
      case CREATE_JOB_ERROR:
        return { ...state, loading: false };
    }
  });

export default createJobReducer;
