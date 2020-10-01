/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN_PENDING:
        break;
      case LOGIN_SUCCESS:
        break;
      case LOGIN_ERROR:
        break;
    }
  });

export default loginReducer;
