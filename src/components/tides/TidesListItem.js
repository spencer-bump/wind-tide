import React from 'react';
import { showHrMn, showAmPm, showMoDay } from '../utilities/displayTime';

const TidesListItem = ({ dataPoint }) => {
  let timestamp = dataPoint.timestamp;
  return (
    <div className="ui segment item">
      {`${(dataPoint.height*3.28084).toFixed(2)} ft  ${dataPoint.state} at ${showHrMn(timestamp)} ${showAmPm(timestamp)} ${showMoDay(timestamp)}`}
    </div>
  );
};

export default TidesListItem;
