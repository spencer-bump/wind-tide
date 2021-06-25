import weather from '../apis/darkSky';
import tides from '../apis/tidesAPIHOOD';
import { DARKSKY_KEY } from '../config/keys';

import { MOCK_WEATHER_DATA } from '../apis/mock';

export const fetchWeather = () => async dispatch => {
  const response = await weather.get(`/forecast/${DARKSKY_KEY}/37.8267,-122.4233`)
  console.log(response.data);
  dispatch({
    type: 'FETCH_WEATHER',
    payload: response.data
  });
};

export const fetchMockWeather = () => {
  console.log(MOCK_WEATHER_DATA);
  return {
    type: 'FETCH_MOCK_WEATHER',
    payload: MOCK_WEATHER_DATA
  }
}

// export const fetchTides = () => async dispatch => {
//   const response = await {data: []};
//   dispatch: ({
//     type: 'FETCH_TIDES',
//     payload: response.data
//   });
// };
