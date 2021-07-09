import React, { useState } from 'react';
import { showAmPm, showHr } from '../utilities/displayTime';
import { degreeToCompass, uvRating } from '../utilities';

const WindTodayAccordion = ({ hour }) => {

  const [activeIndex, setActiveIndex] = useState('');

  const onTitleClick = () => {
    if (activeIndex) {
      setActiveIndex('');
    } else {
      setActiveIndex('active')
    }
  }

  return (
    <div className='ui accordion' key={hour.time}>
      <div
          className={`title ${activeIndex}`}
          onClick={(event) => onTitleClick()}
        >
          <i className='dropdown icon' ></i>
          { `${showHr(hour.time)} ${showAmPm(hour.time)}:` +
            `Winds ${degreeToCompass(hour.windBearing)} at ` +
            `${(hour.windSpeed).toFixed(0)} gusting to ${(hour.windGust).toFixed(0)}`}
      </div>
      <div className={`content ${activeIndex}`} >
          <div className='transition' >
            <div>{`${hour.summary}`}</div>
            <div>{`${(hour.temperature).toFixed(0)}  deg F.`}</div>
            <div>{`UV: ${uvRating(hour.uvIndex)} (${hour.uvIndex}).`}</div>
          </div>
        </div>

    </div>
  );
};


export default WindTodayAccordion;