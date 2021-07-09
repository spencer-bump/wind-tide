import React from 'react';
import { showMoDay, showMoDayYr } from '../utilities/displayTime';
import WindWeekListItem from '../wind/WindWeekListItem';

const WindWeekList = ({ daily }) => {
  let data = daily.data;
  let lastDay = data.length - 1;
  return (
    <div className="ui  ">
      <h3>{`Week Forecast ${showMoDay(data[0].time)} to ${showMoDayYr(data[lastDay].time)}`}</h3>
      <p>{daily.summary}</p>
      <div className="ui list">
        {
          data.map(day => {
            return (
              <div key={day.time}>
                <WindWeekListItem day={day} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default WindWeekList;
