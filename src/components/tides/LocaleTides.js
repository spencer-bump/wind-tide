import React from 'react';

import { showMoDayYr } from '../utilities/displayTime';

import TidesHeightChart from '../charts/TidesHeightChart';

const LocaleTides = props => {
  let tides = props.tides;
  return (
    <div className="ui segment">
      <h3 className="ui header">{`Tides for ${showMoDayYr(tides.timestamp)}`}</h3>
      <TidesHeightChart heights={tides.heights} extremes={tides.extremes}/>
      <div className="ui list">
        <div>{`Data from Kahului Harbor`}</div>
        <div>{`Lat: ${(tides.latitude).toFixed(4)}, Long: ${tides.longitude.toFixed(4)}`}</div>
      </div>
    </div>
  );
};

export default LocaleTides;
