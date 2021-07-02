import React from 'react';
import TideListItem from './TideListItem';

const Heights = props => {
  let heights = props.heights;
  return (
    <div className="ui segment">
      <h3>Heights:</h3>
      <ul>
        {
          heights.map(height => {
            return (
              <div>
                <TideListItem dataPoint={height} />
              </div>
              )
          })
        }
      </ul>
    </div>
  );
};


export default Heights;