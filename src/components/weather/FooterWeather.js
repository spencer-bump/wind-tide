import React from 'react';

const FooterWeather = props => {
  const weather = props.weather;
  let flags     = weather.flags;
  let sources   = flags.sources.map(source => {
                                    return source
                                  }).join(", ");
  return (
    <div className="ui segment">
      <div>{`Data Provider: Powered by DarkSky`}</div>
      <div>{`DarkSky Sources: ${sources}`}</div>
    </div>
  )
}

export default FooterWeather;