import React from 'react';
import TidesListItem from './TidesListItem';

const TidesHeightList = ({ heights }) => {
  return (
    <div className="ui segment">
      <h3>{`Heights 24 Hour Forecast`}</h3>

      <div className="ui list">
        {
          heights.map(height => {
            return (
              <div key={height.timestamp}>
                <TidesListItem dataPoint={height} />
              </div>
              )
          })
        }
      </div>
    </div>
  );
};

export default TidesHeightList;
