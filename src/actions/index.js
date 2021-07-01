import weather from '../apis/darkSky';
import tides from '../apis/tides';

import { FETCH_WEATHER, FETCH_TIDES } from './types';
import { DARKSKY_KEY } from '../config/keys';

// For development
import { FETCH_MOCK_WEATHER, FETCH_MOCK_TIDES } from './types';
import { MOCK_WEATHER_DATA, MOCK_TIDE_DATA } from '../apis/mock';

//  "proxy":  "https://api.darksky.net",
export const fetchWeather = () => async dispatch => {
  const response = await weather.get(`/forecast/${DARKSKY_KEY}/20.89249643,-156.4249983`)
  console.log(response.data);
  dispatch({
    type: FETCH_WEATHER,
    payload: response.data
  });
};

export const fetchMockWeather = () => {
  console.log(MOCK_WEATHER_DATA);
  return {
    type: FETCH_MOCK_WEATHER,
    payload: MOCK_WEATHER_DATA
  };
};

export const fetchMockTides = () => {
  console.log(MOCK_TIDE_DATA);
  return {
    type: FETCH_MOCK_TIDES,
    payload: MOCK_TIDE_DATA
  };
};


export const fetchTides = () => {
  console.log(MOCK_TIDE_DATA);
  return {
    type: FETCH_MOCK_TIDES,
    payload: MOCK_TIDE_DATA
  };
};

// TODO: issue dispatch
// export const fetchTides = () => async dispatch => {
//   const response = await tides.end(function (res, dispatch) {
//       if (res.error) throw new Error(res.error);

//       console.log(res.body);
//       // TODO: dispatch is not in scope
//       // dispatch: ({
//       //   type: FETCH_TIDES,
//       //   payload: res.body
//       // });
//     });
// };

