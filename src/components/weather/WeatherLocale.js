import React from 'react';

const WeatherLocale = props => {
  let weather = props.weather;
  return (
      <div className="ui container">
        <h3>Locale</h3>
        <ul>
          <li>latitude:  {weather.latitude}</li>
          <li>longitude:  {weather.longitude}</li>
          <li>timezone:  {weather.timezone}</li>
          <li>offset:  {weather.offset}</li>
        </ul>
      </div>
    )
};

export default WeatherLocale;
