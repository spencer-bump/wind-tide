import React from 'react';
import degreeToCompass from '../utilities/degreeToCompass';
import { showHr, showAmPm } from '../utilities/displayTime';
import uvRating from '../utilities/uvRating';

const HourlyListItem = props => {
  let hour = props.hour;
  return (
    <div className="ui segment" key={hour.time}>
      <div>{`${showHr(hour.time)} ${showAmPm(hour.time)}: ${degreeToCompass(hour.windBearing)} at ${(hour.windSpeed).toFixed(0)} gusting to ${(hour.windGust).toFixed(0)}`}</div>
      <div>{hour.summary}</div>
      <div>{(hour.temperature).toFixed(0)} Farenheight, UV Index: {uvRating(hour.uvIndex)}</div>
    </div>
  );
};

export default HourlyListItem;
