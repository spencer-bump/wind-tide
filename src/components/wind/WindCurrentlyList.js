import React from 'react';
import { showAmPm, showHrMn, showMoDayYr } from '../utilities/displayTime';
import WindCurrentlyListItem from '../wind/WindCurrentlyListItem';

const WindCurrentlyList = ({ currently }) => {
    return (
      <div className="ui segment">
        <h3 className="ui header">{`${showHrMn(currently.time)} ${showAmPm(currently.time)} ${showMoDayYr(currently.time)}`}</h3>
        <div className="ui list">
          <WindCurrentlyListItem currently={currently} />
        </div>
      </div>
    )
};

export default WindCurrentlyList;
