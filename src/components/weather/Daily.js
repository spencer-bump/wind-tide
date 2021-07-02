import React from 'react';

const Daily = props => {
  let daily = props.daily;
  let reDate = new RegExp(/^\d+\/\d+/i);
  return (
    <div className="ui container">
      <h3>Daily</h3>
      <ul>
        <li>summary: {daily.summary}</li>
        <li>icon: {daily.icon}</li>
        <ul>
          {
            daily.data.map(day => {
              const date = new Date((day.time)*1000).toLocaleString();
              let showDate = date.match(reDate)[0];
              return (
                <li key={day.time} >{`${showDate} windSpeed: ${day.windSpeed}, windGust: ${day.windGust}, ${day.summary}`}</li>
              )
            })
          }
        </ul>
      </ul>
    </div>
  );
};

export default Daily;
