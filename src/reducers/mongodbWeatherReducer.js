import { FETCH_MONGODB_WEATHER } from '../actions/types';

export const mongodbWeatherReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_MONGODB_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
