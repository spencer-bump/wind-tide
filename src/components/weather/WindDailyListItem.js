import React from 'react';
import { showMoDay } from '../utilities/displayTime';
import degreeToCompass from '../utilities/degreeToCompass';
import { moonPhaseDescription } from '../utilities/displayMoonPhase';
import Accordion from '../helpers/Accordion';

const WindDailyListItem = props => {
  const day = props.day;
  const items =[{
      "title":    `${showMoDay(day.time)}: Winds ${degreeToCompass(day.windBearing)} ` +
                  ` at ${(day.windSpeed).toFixed(0)} gusting to ${(day.windGust).toFixed(0)}`,

      "content":  `${day.summary} Highs: ${(day.temperatureMax).toFixed(0)} and ` +
                  `Lows: ${(day.temperatureMin).toFixed(0)}. ${moonPhaseDescription(day.moonPhase)}`
    }];
  return (
    <div className="ui segment" key={day.time}>
      <Accordion items={items} />
    </div>
  );
};

export default WindDailyListItem;