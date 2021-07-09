import React from 'react';
import { showAmPm, showHrMn } from '../utilities/displayTime';
import WindTodayListItem from '../wind/WindTodayListItem';

const WindTodayList = ({ hourly, timeNow }) => {
  return (
    <div className="ui ">
      <h3 className="ui header">
        {`Hourly Forecast from ${showHrMn(timeNow)} ${showAmPm(timeNow)}`}
      </h3>
      <p>{hourly.summary}</p>
      <div className="ui list">
          {
            hourly.data.map((hour, index) => {
              if (index > 23) {
                return null;
              }
              return (
                <div key={hour.time} className="item">
                  <WindTodayListItem hour={hour}/>
                </div>
              )
            })
          }
      </div>
    </div>
  );
};

export default WindTodayList;
