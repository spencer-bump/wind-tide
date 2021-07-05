import React from 'react';
import { showMoDay } from '../utilities/displayTime';
import degreeToCompass from '../utilities/degreeToCompass';
import { moonPhaseDescription } from '../utilities/displayMoonPhase';

const WindDailyListItem = props => {
  let day = props.day;
  return (
    <div className="ui segment" key={day.time}>
      <div>{`${showMoDay(day.time)}: ${degreeToCompass(day.windBearing)} at ${(day.windSpeed).toFixed(0)} gusting to ${(day.windGust).toFixed(0)}`}</div>
      <div>{day.summary} </div>
      <div>{moonPhaseDescription(day.moonPhase)} moon</div>
    </div>
  );
};

export default WindDailyListItem;