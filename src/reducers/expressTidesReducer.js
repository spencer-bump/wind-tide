import { FETCH_EXPRESS_TIDES } from '../actions/types';

export const expressTidesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_EXPRESS_TIDES:
      return action.payload;
    default:
      return state;
  }
};
