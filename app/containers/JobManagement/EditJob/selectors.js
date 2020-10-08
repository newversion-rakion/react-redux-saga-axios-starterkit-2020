import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the editJob state domain
 */

const selectEditJobDomain = state => state.editJobData || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditJob
 */

const makeSelectEditJob = () =>
  createSelector(
    selectEditJobDomain,
    substate => substate,
  );

export default makeSelectEditJob;
export { selectEditJobDomain };
