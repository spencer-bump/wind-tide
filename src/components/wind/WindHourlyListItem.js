import React from 'react';
import WindHourlyAccordion from '../wind/WindHourlyAccordion';

const WindHourlyListItem = ({ hour }) => {
  return (
    <div className="ui segment" key={hour.time}>
      <WindHourlyAccordion hour={hour} />
    </div>
  );
};

export default WindHourlyListItem;
