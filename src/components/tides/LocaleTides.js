import React from 'react';

import HeightPlot from './HeightPlot';

const LocaleTides = props => {
  let tides = props.tides;
  return (
    <div className="ui segment">
      <h3 className="ui header">Kanaha Beach Park</h3>
      <HeightPlot heights={tides.heights} extremes={tides.extremes}/>
      <div className="ui list">
        <div>{`Data from Kahului Harbor`}</div>
        <div>{`Lat: ${(tides.latitude).toFixed(4)}, Long: ${tides.longitude.toFixed(4)}`}</div>
      </div>
    </div>
  );
};

export default LocaleTides;
