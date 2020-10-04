import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the messages state domain
 */

const selectMessagesDomain = state => state.messages || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Messages
 */

const makeSelectMessages = () =>
  createSelector(
    selectMessagesDomain,
    substate => substate,
  );

export default makeSelectMessages;
export { selectMessagesDomain };
