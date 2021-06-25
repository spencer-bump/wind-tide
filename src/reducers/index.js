import { combineReducers } from 'redux';

import { weatherReducer } from './weatherReducer';
import { tideReducer } from './tideReducer';
import { mockReducer } from './mockReducer';

export default combineReducers({
  weather: weatherReducer,
  tides: tideReducer,
  mock: mockReducer
});
