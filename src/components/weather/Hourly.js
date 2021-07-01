import React from 'react';

const Hourly = props => {
  let hourly = props.hourly;
  let reDate = new RegExp(/^\d+\/\d+/i);
  let reTime = new RegExp(/\d+:\d+:\d+ \S+/i);
  return (
    <div className="ui container">
      <h3>Hourly</h3>
      <ul>
        <li>summary: {hourly.summary}</li>
        <li>icon: {hourly.icon}</li>
        <ul>
          {
            hourly.data.map(hour => {
              const date = new Date((hour.time)*1000).toLocaleString();
              let showTime = date.match(reTime)[0];
              let showDate = date.match(reDate)[0];
              return (
                <li key={hour.time} >{showDate} {showTime}: windSpeed: {hour.windSpeed}, windGust: {hour.windGust}, {hour.summary}</li>
              )
            })
          }
        </ul>
      </ul>
    </div>
  );
};

export default Hourly;
