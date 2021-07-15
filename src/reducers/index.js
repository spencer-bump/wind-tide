import { combineReducers } from 'redux';
// REDUCERS
import { weatherReducer } from './weatherReducer';
import { tidesReducer } from './tidesReducer';
import { mockWeatherReducer } from './mockWeatherReducer';
import { mockTidesReducer } from './mockTidesReducer';
import { placeholderReducer } from './placeholderReducer';
import { expressWeatherReducer } from './expressWeatherReducer';
import { expressTidesReducer } from './expressTidesReducer';



export default combineReducers({
  weather: weatherReducer,
  tides: tidesReducer,
  mockWeather: mockWeatherReducer,
  mockTides: mockTidesReducer,
  placeholder: placeholderReducer,
  expressWeather: expressWeatherReducer,
  expressTides: expressTidesReducer
});
