/*
 *
 * Messages reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
} from './constants';

export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const messagesReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
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

export default messagesReducer;
