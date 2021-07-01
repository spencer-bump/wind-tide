import React from 'react';

const Extremes = props => {
  let extremes = props.extremes;
  let reDate = new RegExp(/^\d+\/\d+/i);
  let reTime = new RegExp(/\d+:\d+:\d+ \S+/i);
  return (
    <div>
      <h3>Extremes:</h3>
      <ul>
      {
        extremes.map(extreme => {
          const date = new Date((extreme.timestamp)*1000).toLocaleString();
          let showTime = date.match(reTime)[0];
          let showDate = date.match(reDate)[0];
          return <li key={extreme.timestamp} >{(extreme.height*3.28084).toFixed(2)} ft  {extreme.state} at {showTime} {showDate} </li>
        })
      }
      </ul>
    </div>
  );
};


export default Extremes;