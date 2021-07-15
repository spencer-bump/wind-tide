import React from 'react';
import TidesTodayListItem from './TidesTodayListItem';

const TidesTodayExtremeList = props => {
  let extremes = props.extremes;
  return (
    <div className="ui segment">
      <h3>Peak Tides</h3>
      <div className="ui list">
        {
          extremes.map(extreme => {
            return (
              <div key={extreme.timestamp}>
                <TidesTodayListItem dataPoint={extreme} />
              </div>
              )
          })
        }
      </div>
    </div>
  );
};


export default TidesTodayExtremeList;
