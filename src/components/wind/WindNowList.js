import React from 'react';
import { uvRating } from '../utilities';


const WindNowList = ({ currently }) => {
    return (
      <div className="ui list">
        <div>{currently.summary}</div>
        <div>{(currently.temperature).toFixed(0)} Farenheight</div>
        <div>UV Index: {uvRating(currently.uvIndex)}</div>
      </div>

    )
};

export default WindNowList;
