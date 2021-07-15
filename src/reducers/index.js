import { combineReducers } from 'redux';
// REDUCERS
import { weatherReducer } from './weatherReducer';
import { tidesReducer } from './tidesReducer';
import { placeholderReducer } from './placeholderReducer';
import { expressWeatherReducer } from './expressWeatherReducer';
import { expressTidesReducer } from './expressTidesReducer';
import { mongodbWeatherReducer} from './mongodbWeatherReducer';



export default combineReducers({
  weather: weatherReducer,
  tides: tidesReducer,
  placeholder: placeholderReducer,
  expressWeather: expressWeatherReducer,
  expressTides: expressTidesReducer,
  mongodbWeather: mongodbWeatherReducer
});
