import React from 'react';
import WindHourlyAccordion from './WindHourlyAccordion';

const WindHourlyListItem = props => {
  let hour = props.hour;
  return (
    <div className="ui segment" key={hour.time}>
      <WindHourlyAccordion hour={hour} />
    </div>
  );
};

export default WindHourlyListItem;
