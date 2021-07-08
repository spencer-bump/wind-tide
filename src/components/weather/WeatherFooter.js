import React from 'react';

const WeatherFooter = ({ weather }) => {
  const flags     = weather.flags;
  const sources   = flags.sources.map(source => {
                                    return source
                                  }).join(", ");
  return (
    <div className="ui segment">
      <div className="ui list">
        <div>{`Data Provider: Powered by DarkSky`}</div>
        <div>{`DarkSky Sources: ${sources}`}</div>
        <div>{`Data from Kahului Airport`}</div>
        <div>{`Lat: ${(weather.latitude).toFixed(4)}, Long: ${weather.longitude.toFixed(4)}`}</div>
        <div>{`Timezone: ${weather.timezone} (UTC ${weather.offset})`}</div>
        <div>{`Units: ${flags.units}`}</div>
      </div>
    </div>
  )
}

export default WeatherFooter;