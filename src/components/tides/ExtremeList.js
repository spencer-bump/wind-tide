import React from 'react';
import TideListItem from './TideListItem';

const ExtremeList = props => {
  let extremes = props.extremes;
  return (
    <div className="ui segment">
      <h3>Extremes:</h3>
      <ul>
        {
          extremes.map(extreme => {
            return (
              <div>
                <TideListItem dataPoint={extreme} />
              </div>
              )
          })
        }
      </ul>
    </div>
  );
};


export default ExtremeList;