import produce from 'immer';
import {
  DEFAULT_ACTION,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from './constants';

export const initialState = {
  testData: '...',
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case REQUEST_PENDING:
        return { ...state, loading: true };
      case REQUEST_SUCCESS:
        return { ...state, loading: false };
      case REQUEST_ERROR:
        return { ...state, loading: false };
      case DEFAULT_ACTION:
        break;
    }
  });

export default appReducer;
