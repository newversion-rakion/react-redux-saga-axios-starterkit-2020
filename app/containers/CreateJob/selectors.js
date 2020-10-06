import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createJob state domain
 */

const selectCreateJobDomain = state => state.createJob || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateJob
 */

const makeSelectCreateJob = () =>
  createSelector(
    selectCreateJobDomain,
    substate => substate,
  );

export default makeSelectCreateJob;
export { selectCreateJobDomain };
