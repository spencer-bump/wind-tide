import React from 'react';
import { showAmPm, showHrMn } from '../utilities/displayTime';
import HourlyListItem from './HourlyListItem';

const HourlyList = props => {
  let hourly = props.hourly;
  let timeNow = props.timeNow;
  return (
    <div className="ui segment">
      <h3 className="ui header">
        {`Hourly Forecast from ${showHrMn(timeNow)} ${showAmPm(timeNow)}`}
      </h3>
      <div>{hourly.summary}</div>
      <div className="ui list">
          {
            hourly.data.map((hour, index) => {
              if (index > 23) {
                return null;
              }
              return (
                <div key={hour.time} className="item">
                  <HourlyListItem hour={hour}/>
                </div>
              )
            })
          }
      </div>
    </div>
  );
};

export default HourlyList;
