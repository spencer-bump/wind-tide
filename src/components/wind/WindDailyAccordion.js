import React, { useState } from 'react';
import { showMoDay } from '../utilities/displayTime';
import { degreeToCompass, moonPhaseDescription } from '../utilities';

const WindDailyAccordion = ({ day }) => {

  const [activeIndex, setActiveIndex] = useState('');

  const onTitleClick = () => {
    if (activeIndex) {
      setActiveIndex('');
    } else {
      setActiveIndex('active')
    }
  }

  return (
    <div className='ui accordion' key={day.time}>
      <div
          className={`title ${activeIndex}`}
          onClick={(event) => onTitleClick()}
        >
          <i className='dropdown icon' ></i>
          {`${showMoDay(day.time)}: Winds ${degreeToCompass(day.windBearing)} ` +
                  ` at ${(day.windSpeed).toFixed(0)} gusting to ${(day.windGust).toFixed(0)}`}
      </div>
      <div className={`content ${activeIndex}`} >
          <div className='transition' >
            <div>{`${day.summary}`}</div>
            <div>{`High: ${(day.temperatureMax).toFixed(0)}  ` +
                  `Low: ${(day.temperatureMin).toFixed(0)}.`}</div>
            <div>{` ${moonPhaseDescription(day.moonPhase)}`}</div>
          </div>
        </div>

    </div>
  );
};


export default WindDailyAccordion;