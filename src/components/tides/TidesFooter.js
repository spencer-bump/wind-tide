import React from 'react';

const TiFooter = ({ tides }) => {
  return (
    <div >
      <div>{`Tides Data Provider: ${tides.copyright}`}</div>
      <div>{`Data from Kahului Harbor`}</div>
      <div>{`Lat: ${(tides.latitude).toFixed(4)}, Long: ${tides.longitude.toFixed(4)}`}</div>

      <div>{`Provider Disclaimer: ${tides.disclaimer}`}</div>
    </div>
  );
};

export default TiFooter;
