import React from 'react';
import TideListItem from './TideListItem';

const HeightList = props => {
  let heights = props.heights;
  return (
    <div className="ui segment">
      <h3>{`Heights 24 Hour Forecast`}</h3>

      <div className="ui list">
        {
          heights.map(height => {
            return (
              <div key={height.timestamp}>
                <TideListItem dataPoint={height} />
              </div>
              )
          })
        }
      </div>
    </div>
  );
};

export default HeightList;
