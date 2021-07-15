import { FETCH_MOCK_TIDES } from '../actions/types';

export const mockTidesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_MOCK_TIDES:
      return action.payload;
    default:
      return state;
  }
};
