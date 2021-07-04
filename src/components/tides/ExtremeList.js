import React from 'react';

import TideListItem from './TideListItem';

const ExtremeList = props => {
  let extremes = props.extremes;
  return (
    <div className="ui segment">
      <h3>Peak Tides</h3>
      <div className="ui list">
        {
          extremes.map(extreme => {
            return (
              <div key={extreme.timestamp}>
                <TideListItem dataPoint={extreme} />
              </div>
              )
          })
        }
      </div>
    </div>
  );
};


export default ExtremeList;
