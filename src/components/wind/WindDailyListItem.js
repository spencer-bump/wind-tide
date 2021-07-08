import React from 'react';
import WindDailyAccordion from '../wind/WindDailyAccordion';

const WindDailyListItem = ({ day }) => {
  return (
    <div className="ui segment" key={day.time}>
      <WindDailyAccordion  day={day} />
    </div>
  );
};

export default WindDailyListItem;