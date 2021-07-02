import React from 'react';

const LocaleTides = props => {
  let tides = props.tides;
  const date = new Date((tides.timestamp)*1000).toLocaleString();
  return (
    <div>
      <ul>
        <li>copyright: {tides.copyright}</li>
        <li>datetime: {tides.datetime}</li>
        <li>disclaimer: {tides.disclaimer}</li>
        <li>latitude: {tides.latitude}</li>
        <li>longitude: {tides.longitude}</li>
        <li>status: {tides.status}</li>
        <li>timestamp: {date}</li>
        <li>timezone: {tides.timezone}</li>
        <li>unit: {tides.unit}</li>
      </ul>
    </div>
  );
};

export default LocaleTides;
