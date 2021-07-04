import React from 'react';
import { showMoDay, showMoDayYr } from '../utilities/displayTime';

import DailyListItem from './DailyListItem';

const DailyList = props => {
  let daily = props.daily;
  let data = props.daily.data;
  let lastDay = data.length - 1;
  return (
    <div className="ui segment">
      <h3>{`Week Forecast ${showMoDay(data[0].time)} to ${showMoDayYr(data[lastDay].time)}`}</h3>
      <p>{daily.summary}</p>
      <div className="ui list">
        {
          data.map(day => {
            return (
              <div key={day.time}>
                <DailyListItem day={day} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default DailyList;
