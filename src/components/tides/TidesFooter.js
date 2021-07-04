import React from 'react';

const TidesFooter = props => {
  const tides = props.tides;
  return (
    <div className="ui segment">
      <p>{`Provider Copyright: ${tides.copyright}`}</p>
      <div>{`Provider Disclaimer: ${tides.disclaimer}`}</div>
    </div>
  );
};

export default TidesFooter;
