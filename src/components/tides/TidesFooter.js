import React from 'react';

const TiFooter = ({ tides }) => {
  return (
    <div className="ui segment">
      <div>{`Data from Kahului Harbor`}</div>
      <div>{`Lat: ${(tides.latitude).toFixed(4)}, Long: ${tides.longitude.toFixed(4)}`}</div>
      <p>{`Provider Copyright: ${tides.copyright}`}</p>
      <div>{`Provider Disclaimer: ${tides.disclaimer}`}</div>
    </div>
  );
};

export default TiFooter;
