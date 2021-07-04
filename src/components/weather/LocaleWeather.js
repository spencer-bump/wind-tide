import React from 'react';

const LocaleWeather = props => {
  let weather = props.weather;
  let flags = props.weather.flags;
  let sources = flags.sources.map(source => {
                                    return source
                                  }).join(", ");
  return (
      <div className="ui segment">
        <h3 className="ui header">Kanaha Beach Park</h3>
        <div className="ui segment">
          <div className="ui list">
            <div>{`Data from Kahului Airport`}</div>
            <div>{` lat: ${(weather.latitude).toFixed(4)}, long: ${weather.longitude.toFixed(4)}`}</div>
            <div>{`Timezone: ${weather.timezone}, UTC offset: ${weather.offset}`}</div>
            <div>{`Units: ${flags.units}`}</div>
            <div>{`Sources: ${sources}`}</div>
          </div>
        </div>
      </div>
    )
};

export default LocaleWeather;
