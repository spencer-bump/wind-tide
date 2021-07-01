import React from 'react';

const Currently = props => {
  let currently = props.currently;
  const date = new Date((currently.time)*1000).toLocaleString();
    return (
      <div className="ui container">
        <h3>Currently</h3>
        <ul>
          <li>apparentTemperature: {currently.apparentTemperature}</li>
          <li>cloudCover: {currently.cloudCover}</li>
          <li>dewPoint: {currently.dewPoint}</li>
          <li>humidity: {currently.humidity}</li>
          <li>icon: {currently.icon}</li>
          <li>nearestStormDistance: {currently.nearestStormDistance}</li>
          <li>nearestStormBearing: {currently.nearestStormBearing}</li>
          <li>ozone: {currently.ozone}</li>
          <li>precipIntensity: {currently.precipIntensity}</li>
          <li>precipProbability: {currently.precipProbability}</li>
          <li>pressure: {currently.pressure}</li>
          <li>summary: {currently.summary}</li>
          <li>temperature: {currently.temperature}</li>
          <li>time: {date}</li>
          <li>uvIndex: {currently.uvIndex}</li>
          <li>visibility: {currently.visibility}</li>
          <li>windBearing: {currently.windBearing}</li>
          <li>windSpeed: {currently.windSpeed}</li>
          <li>windGust: {currently.windGust}</li>
        </ul>
      </div>
    )
};

export default Currently;
