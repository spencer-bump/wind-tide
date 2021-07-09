import React from 'react';
import { showAmPm, showHrMn, showMoDayYr } from '../utilities/displayTime';
import { uvRating } from '../utilities';

import WindCurrentlyListItem from '../wind/WindCurrentlyListItem';


const WindCurrentlyList = ({ currently }) => {
    return (
      <div className="ui list">
        <div>{currently.summary}</div>
        <div>{(currently.temperature).toFixed(0)} Farenheight</div>
        <div>UV Index: {uvRating(currently.uvIndex)}</div>
      </div>

    )
};

export default WindCurrentlyList;
