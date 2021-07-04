import { FETCH_WEATHER } from '../actions/types';

export const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  };
};
