import React from 'react';
import WindForecastChart from '../charts/WindForecastChart';
import TemperatureHourlyChart from '../charts/TemperatureHourlyChart';

import { showMoDayYr } from '../utilities/displayTime';

const WeatherLocale = props => {
  let weather = props.weather;
  let flags = props.weather.flags;
  return (
    <div>
      <div className="ui segment">
        <h3 className="ui header">{`Hourly Temp Forecast for ${showMoDayYr(weather.currently.time)}`}</h3>
        <TemperatureHourlyChart data={weather.hourly.data} />
      </div>
      <div className="ui segment">
        <h3 className="ui header">{`Hourly Wind Forecast for ${showMoDayYr(weather.currently.time)}`}</h3>
        <WindForecastChart data={weather.hourly.data} />
      </div>
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

export default WeatherLocale;
