import React from 'react';

const LocaleWeather = props => {
  let weather = props.weather;
  let flags = props.weather.flags;
  let sources = flags.sources.map(source => {
                                    return source
                                  }).join(", ");
  return (
      <div className="ui container">
        <h3>Locale</h3>
        <ul>
          <li>latitude:  {weather.latitude}</li>
          <li>longitude:  {weather.longitude}</li>
          <li>timezone:  {weather.timezone}</li>
          <li>offset:  {weather.offset}</li>
          <li>sources: {sources}</li>
          <li>nearest-station: {flags["nearest-station"]}</li>
          <li>units: {flags.units}</li>
        </ul>
      </div>
    )
};

export default LocaleWeather;
