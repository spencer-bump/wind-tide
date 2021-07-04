import { combineReducers } from 'redux';
// REDUCERS
import { weatherReducer } from './weatherReducer';
import { tidesReducer } from './tidesReducer';
import { mockWeatherReducer } from './mockWeatherReducer';
import { mockTidesReducer } from './mockTidesReducer';

export default combineReducers({
  weather: weatherReducer,
  tides: tidesReducer,
  mockWeather: mockWeatherReducer,
  mockTides: mockTidesReducer
});
