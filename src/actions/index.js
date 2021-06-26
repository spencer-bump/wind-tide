

import weather from '../apis/darkSky';
import tides from '../apis/tides';
import { DARKSKY_KEY, TIDES_KEY } from '../config/keys';

import { MOCK_WEATHER_DATA, MOCK_TIDE_DATA } from '../apis/mock';

//  "proxy":  "https://api.darksky.net",
export const fetchWeather = () => async dispatch => {
  const response = await weather.get(`/forecast/${DARKSKY_KEY}/20.89249643,-156.4249983`)
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

export const fetchMockTides = () => {
  console.log(MOCK_TIDE_DATA);
  return {
    type: 'FETCH_MOCK_TIDES',
    payload: MOCK_TIDE_DATA
  }
}


// export const fetchTides = null;
// TODO: issue dispatch
export const fetchTides = () => async dispatch => {
  const response = await tides.end(function (res) {
      if (res.error) throw new Error(res.error);

      console.log(res.body);
      // debugger;
      // dispatch: ({
      //   type: 'FETCH_TIDES',
      //   payload: response.data
      // });
    });
};
