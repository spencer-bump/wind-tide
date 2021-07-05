import React from 'react';
import degreeToCompass from '../utilities/degreeToCompass';
import { showHr, showAmPm } from '../utilities/displayTime';
import uvRating from '../utilities/uvRating';
import Accordion from '../helpers/Accordion';

const WindHourlyListItem = props => {
  let hour = props.hour;
  const items = [{
    "title":    `${showHr(hour.time)} ${showAmPm(hour.time)}: ` +
                `Winds ${degreeToCompass(hour.windBearing)} at ` +
                `${(hour.windSpeed).toFixed(0)} gusting to ${(hour.windGust).toFixed(0)}`,
    "content":  `${hour.summary} ${(hour.temperature).toFixed(0)} deg F. ` +
                `UV: ${uvRating(hour.uvIndex)} (${hour.uvIndex}).`
  }]
  return (
    <div className="ui segment" key={hour.time}>
      <Accordion items={items} />
    </div>
  );
};

export default WindHourlyListItem;
