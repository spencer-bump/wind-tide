import React from 'react';
import WindWeekAccordion from '../wind/WindWeekAccordion';

const WindWeekListItem = ({ day }) => {
  return (
    <div className="ui segment" key={day.time}>
      <WindWeekAccordion  day={day} />
    </div>
  );
};

export default WindWeekListItem;