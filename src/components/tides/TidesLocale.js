import React from 'react';

import TidesHeightChart from '../charts/TidesHeightChart';

const TidesLocale = props => {
  let tides = props.tides;
  return (
    <div className="ui segment">
      <TidesHeightChart heights={tides.heights} extremes={tides.extremes}/>
      <div className="ui list">
        <div>{`Data from Kahului Harbor`}</div>
        <div>{`Lat: ${(tides.latitude).toFixed(4)}, Long: ${tides.longitude.toFixed(4)}`}</div>
      </div>
    </div>
  );
};

export default TidesLocale;
