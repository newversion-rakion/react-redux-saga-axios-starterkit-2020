/*
 *
 * Team reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  API_PENDING,
  INVITE_SUCCESS,
  INVITE_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  loginData: {},
};

/* eslint-disable default-case, no-param-reassign */
const teamReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case API_PENDING:
        return { ...state, loading: true };
      case INVITE_SUCCESS:
        return { ...state, loginData: action.respond, loading: false };
      case INVITE_ERROR:
        return { ...state, loading: false };
    }
  });

export default teamReducer;
