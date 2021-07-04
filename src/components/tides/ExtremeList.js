import React from 'react';
import { showAmPm, showHrMn, showMoDay } from '../utilities/displayTime';
import TideListItem from './TideListItem';

const ExtremeList = props => {
  let extremes = props.extremes;
  let timeNow = props.timeNow;
  return (
    <div className="ui segment">
      <h3>Extremes</h3>
      <div className="ui list">
        {
          extremes.map(extreme => {
            return (
              <div>
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