import React from 'react';

const WeatherLocale = props => {
  const weather    = props.weather,
        flags      = weather.flags;
  return (
    <div>
      <div className="ui segment">
        <div className="ui list">
          <div>{`Weather Data from Kahului Airport`}</div>
          <div>{`Lat: ${(weather.latitude).toFixed(4)}, Long: ${weather.longitude.toFixed(4)}`}</div>
          <div>{`Timezone: ${weather.timezone} (UTC ${weather.offset})`}</div>
          <div>{`Units: ${flags.units}`}</div>
        </div>
      </div>
    </div>
    )
};

export default WeatherLocale;
