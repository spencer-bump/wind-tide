import { FETCH_NEW_TIDES } from '../actions/types';

export const newTidesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_NEW_TIDES:
      return action.payload;
    default:
      return state;
  }
};
