import React from 'react';
import TidesTodayListItem from './TidesTodayListItem';

const TidesTodayHeightList = ({ heights }) => {
  return (
    <div className="ui segment">
      <h3>{`Heights 24 Hour Forecast`}</h3>

      <div className="ui list">
        {
          heights.map(height => {
            return (
              <div key={height.timestamp}>
                <TidesTodayListItem dataPoint={height} />
              </div>
              )
          })
        }
      </div>
    </div>
  );
};

export default TidesTodayHeightList;
