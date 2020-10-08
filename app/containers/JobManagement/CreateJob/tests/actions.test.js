import { defaultAction } from '../actions';
import { RESET_CREATE_JOBDATA_REDUCER } from '../constants';

describe('CreateJob actions', () => {
  describe('Default Action', () => {
    it('has a type of RESET_CREATE_JOBDATA_REDUCER', () => {
      const expected = {
        type: RESET_CREATE_JOBDATA_REDUCER,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
