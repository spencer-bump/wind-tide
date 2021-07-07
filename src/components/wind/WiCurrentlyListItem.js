import React from 'react';
import degreeToCompass from '../utilities/degreeToCompass';
import uvRating from '../utilities/uvRating';

const WindCurrentlyListItem = props => {
  let currently = props.currently;
  return (
    <div className="ui item">
      <h3 className="ui heading">{`Winds ${degreeToCompass(currently.windBearing)} at ${(currently.windSpeed).toFixed(0)} gusting to ${(currently.windGust).toFixed(0)} mph`}</h3>
      <div>{currently.summary}</div>
      <div>{(currently.temperature).toFixed(0)} Farenheight, UV Index: {uvRating(currently.uvIndex)}</div>
    </div>
  )
}

export default WindCurrentlyListItem;
