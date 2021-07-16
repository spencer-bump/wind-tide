import axios from 'axios';
import weather from '../apis/darkSky';

import {  FETCH_WEATHER, FETCH_TIDES, FETCH_NEW_TIDES,
          FETCH_EXPRESS_WEATHER, FETCH_EXPRESS_TIDES,
          FETCH_MONGODB_WEATHER, FETCH_MONGODB_TIDES } from './types';
import { DARKSKY_KEY, TIDES_KEY } from '../config/keys';

// For development
import { FETCH_PLACEHOLDER } from './types';

//  "proxy":  "https://api.darksky.net",
export const fetchWeather = () => async dispatch => {
  const response = await weather.get(`/forecast/${DARKSKY_KEY}/20.89249643,-156.4249983?exclude=[minutely]`)
  console.log("weather: ",response.data);
  dispatch({
    type: FETCH_WEATHER,
    payload: response.data
  });
};



// export const fetchTides = () => {
//   console.log("fetchTides returning mock: ", NEW_MOCK_TIDE_DATA);
//   return {
//     type: FETCH_MOCK_TIDES,
//     payload: NEW_MOCK_TIDE_DATA
//   };
// };

// TODO: issue dispatch
/*export const fetchTides = () => async dispatch => {
  const response = await tides.end(res => {
      if (res.error) throw new Error(res.error);

      console.log("tides: ",res.body);
      // TODO: dispatch is not in scope
      // dispatch: ({
      //   type: FETCH_PLACEHOLDER,
      //   payload: res.body
      // });
      return res.body;
    });
  // console logs a request promise
  console.log("tides response: ", response);
};*/

const placeholderOptions = {
  method: 'GET',
  url: 'https://jsonplaceholder.typicode.com/todos/1',
}

// TODO: issue dispatch
export const fetchPlaceholder = () => async dispatch => {
  const response = await axios.request(placeholderOptions).then((response) => {
      console.log("placeholder: ", response.data);
      return response;
  }).catch((error) => {
    console.error(error);
  })
  dispatch({
      type: FETCH_PLACEHOLDER,
      payload: response.data
  });
};

export const fetchExpressWeather = () => async dispatch => {
  const response = await axios.get("http://localhost:5000/weatherApi");
  console.log("Express weather response: ", response.data);
  dispatch ({
      type:   FETCH_EXPRESS_WEATHER,
      payload: response.data
    });
};

export const fetchExpressTides = () => async dispatch => {
  const response = await axios.get("http://localhost:5000/tidesApi");
  console.log("Express tides response: ", response.data);
  dispatch ({
      type:   FETCH_EXPRESS_TIDES,
      payload: response.data
    });
};

export const fetchMongoDBWeather = () => async dispatch => {
  const response = await axios.get("http://localhost:5000/winds");
  console.log("MongoDB weather response: ", response.data)
  dispatch ({
      type:   FETCH_MONGODB_WEATHER,
      payload: [response.data]
    });
};

const options = {
  method: 'GET',
  url: 'https://tides.p.rapidapi.com/tides',
  params: {latitude: '20.9030556', longitude: '-156.4430556', duration: '1440', interval: '60'},
  headers: {
    'x-rapidapi-key': TIDES_KEY,
    'x-rapidapi-host': 'tides.p.rapidapi.com'
  }
};

export const fetchNewTides = () => async dispatch => {
  const response = await axios.request(options).then(function (response) {
      console.log(response.data);
      return response
    }).catch(function (error) {
      console.error(error);
    })
    dispatch({
      type: FETCH_PLACEHOLDER,
      payload: response.data
  });
  };



