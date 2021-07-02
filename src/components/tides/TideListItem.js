import React from 'react';

const TideListItem = props => {
  let dataPoint = props.dataPoint;
  let dateStamp = new Date((dataPoint.timestamp)*1000).toLocaleDateString();
  let timeStamp = new Date((dataPoint.timestamp)*1000).toLocaleTimeString();
  let showAmPm = timeStamp.match(new RegExp(/[AMP]+/i))[0];
  let showHrMn = timeStamp.match(new RegExp(/^\d+:\d+/i))[0];
  let showMoDay = dateStamp.match(new RegExp(/^\d+\/\d+/i))[0];
  return (
    <div className="ui segment"  key={dataPoint.timestamp}>
      {(dataPoint.height*3.28084).toFixed(2)} ft  {dataPoint.state} at {showHrMn} {showAmPm} {showMoDay}
    </div>
  );
};

export default TideListItem;