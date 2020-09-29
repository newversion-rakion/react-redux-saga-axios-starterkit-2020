/*
 *
 * DashBoard reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  testData: '...',
};

/* eslint-disable default-case, no-param-reassign */
const dashBoardReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default dashBoardReducer;
