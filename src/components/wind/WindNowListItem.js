import React from 'react';
import { degreeToCompass, uvRating } from '../utilities';

const WindNowListItem = ({ currently }) => {
  return (
    <div className="ui item">
      <h3 className="ui heading">{`Winds ${degreeToCompass(currently.windBearing)} at ${(currently.windSpeed).toFixed(0)} gusting to ${(currently.windGust).toFixed(0)} mph`}</h3>
      <div>{currently.summary}</div>
      <div>{(currently.temperature).toFixed(0)} Farenheight, UV Index: {uvRating(currently.uvIndex)}</div>
    </div>
  )
}

export default WindNowListItem;
