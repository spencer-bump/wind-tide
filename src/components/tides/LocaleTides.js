import React from 'react';

const LocaleTides = props => {
  let tides = props.tides;
  const date = new Date((tides.timestamp)*1000).toLocaleString();
  return (
    <div className="ui segment">
      <h3 className="ui header">Kanaha Beach Park</h3>
      <div className="ui segment">
        <div className="ui list">
          <div>{`Data from Kahului Harbor`}</div>
          <p>{`lat: ${(tides.latitude).toFixed(4)}, long: ${tides.longitude.toFixed(4)}`}</p>

        </div>
      </div>
    </div>
  );
};

export default LocaleTides;
