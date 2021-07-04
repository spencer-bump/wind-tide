import React from 'react';

const FooterTides = props => {
  const tides = props.tides;
  return (
    <div className="ui segment">
      <p>{`Provider Copyright: ${tides.copyright}`}</p>
      <div>{`Provider Disclaimer: ${tides.disclaimer}`}</div>
    </div>
  );
};

export default FooterTides;