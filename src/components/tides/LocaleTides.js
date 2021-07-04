import React from 'react';

const LocaleTides = props => {
  let tides = props.tides;
  return (
    <div className="ui segment">
      <h3 className="ui header">Kanaha Beach Park</h3>
      <div className="ui segment">
        <div className="ui list">
          <div>{`Data from Kahului Harbor`}</div>
          <div>{`Lat: ${(tides.latitude).toFixed(4)}, Long: ${tides.longitude.toFixed(4)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default LocaleTides;
