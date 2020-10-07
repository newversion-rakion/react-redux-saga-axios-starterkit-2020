import { defaultAction } from '../actions';
import { RESET_CREATEJOBDATA_REDUCER } from '../constants';

describe('CreateJob actions', () => {
  describe('Default Action', () => {
    it('has a type of RESET_CREATEJOBDATA_REDUCER', () => {
      const expected = {
        type: RESET_CREATEJOBDATA_REDUCER,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
