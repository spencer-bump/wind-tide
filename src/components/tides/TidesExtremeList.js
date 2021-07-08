import React from 'react';
import TidesListItem from './TidesListItem';

const TidesExtremeList = props => {
  let extremes = props.extremes;
  return (
    <div className="ui segment">
      <h3>Peak Tides</h3>
      <div className="ui list">
        {
          extremes.map(extreme => {
            return (
              <div key={extreme.timestamp}>
                <TidesListItem dataPoint={extreme} />
              </div>
              )
          })
        }
      </div>
    </div>
  );
};


export default TidesExtremeList;
