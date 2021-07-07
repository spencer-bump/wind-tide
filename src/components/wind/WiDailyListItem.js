import React from 'react';
import WindDailyAccordion from '../wind/WiDailyAccordion';

const WindDailyListItem = props => {
  const day = props.day;
  return (
    <div className="ui segment" key={day.time}>
      <WindDailyAccordion  day={day} />
    </div>
  );
};

export default WindDailyListItem;