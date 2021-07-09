import React from 'react';
import WindTodayAccordion from '../wind/WindTodayAccordion';

const WindTodayListItem = ({ hour }) => {
  return (
    <div className="ui segment" key={hour.time}>
      <WindTodayAccordion hour={hour} />
    </div>
  );
};

export default WindTodayListItem;
