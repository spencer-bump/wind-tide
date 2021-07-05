import React from 'react';
import WindHourlyChart from '../charts/WindHourlyChart';
import TemperatureHourlyChart from '../charts/TemperatureHourlyChart';
import TemperatureDailyHighLowChart from '../charts/TemperatureDailyHighLowChart';

import { showMoDayYr } from '../utilities/displayTime';

const WeatherLocale = props => {
  const weather    = props.weather,
        dailyData  = weather.daily.data,
        hourlyData = weather.hourly.data,
        flags      = weather.flags;
  return (
    <div>
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
