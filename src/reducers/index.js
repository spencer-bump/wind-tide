import { combineReducers } from 'redux';
// REDUCERS
import { weatherReducer } from './weatherReducer';
import { tidesReducer } from './tidesReducer';
import { placeholderReducer } from './placeholderReducer';
import { expressTidesReducer } from './expressTidesReducer';
import { mongodbWeatherReducer} from './mongodbWeatherReducer';



export default combineReducers({
  weather: weatherReducer,
  tides: tidesReducer,
  placeholder: placeholderReducer,
  expressTides: expressTidesReducer,
  mongodbWeather: mongodbWeatherReducer
});
