import React from 'react';

const Heights = props => {
  let heights = props.heights;
  let reDate = new RegExp(/^\d+\/\d+/i);
  let reTime = new RegExp(/\d+:\d+:\d+ \S+/i);
  return (
    <div>
      <h3>Heights:</h3>
      <ul>
        {
          heights.map(height => {
            const date = new Date((height.timestamp)*1000).toLocaleString();
            let showTime = date.match(reTime)[0];
            let showDate = date.match(reDate)[0];
            return <li key={height.timestamp} >{(height.height*3.28084).toFixed(2)} ft {height.state} at {showTime} {showDate}</li>
          })
        }
      </ul>
    </div>
  );
};


export default Heights;