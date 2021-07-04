import React from 'react';

const LocaleWeather = props => {
  let weather = props.weather;
  let flags = props.weather.flags;
  return (
      <div className="ui segment">
        <h3 className="ui header">Kanaha Beach Park</h3>
        <div className="ui segment">
          <div className="ui list">
            <div>{`Data from Kahului Airport`}</div>
            <div>{`Lat: ${(weather.latitude).toFixed(4)}, Long: ${weather.longitude.toFixed(4)}`}</div>
            <div>{`Timezone: ${weather.timezone} (UTC ${weather.offset})`}</div>
            <div>{`Units: ${flags.units}`}</div>
          </div>
        </div>
      </div>
    )
};

export default LocaleWeather;
