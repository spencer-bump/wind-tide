import { FETCH_EXPRESS_WEATHER } from '../actions/types';

export const expressWeatherReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_EXPRESS_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
