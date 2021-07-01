import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather, fetchMockWeather } from '../actions';

class Weather extends Component {

  componentDidMount() {
    this.props.fetchMockWeather();
    // this.props.fetchWeather();
  }

  renderLocality = weather => {
    return (
      <div className="ui container">
        <h3>Locality</h3>
        <ul>
          <li>latitude:  {weather.latitude}</li>
          <li>longitude:  {weather.longitude}</li>
          <li>timezone:  {weather.timezone}</li>
          <li>offset:  {weather.offset}</li>
        </ul>
      </div>
    )
  };

  renderCurrently = currently => {
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

  renderDaily = daily => {
    let reDate = new RegExp(/^\d+\/\d+/i);
    return (
      <div className="ui container">
        <h3>Daily</h3>
        <ul>
          <li>summary: {daily.summary}</li>
          <li>icon: {daily.icon}</li>
          <ul>
            {daily.data.map(day => {
              const date = new Date((day.time)*1000).toLocaleString();
              let showDate = date.match(reDate)[0];
              return (
                <li key={day.time} >{`${showDate} windSpeed: ${day.windSpeed}, windGust: ${day.windGust}, ${day.summary}`}</li>
              )
            })}
          </ul>
        </ul>
      </div>
    )
  };

  renderHourly = hourly => {
    let reDate = new RegExp(/^\d+\/\d+/i);
    let reTime = new RegExp(/\d+:\d+:\d+ \S+/i);
    return (
      <div className="ui container">
        <h3>Hourly</h3>
        <ul>
          <li>summary: {hourly.summary}</li>
          <li>icon: {hourly.icon}</li>
          <ul>
            {
              hourly.data.map(hour => {
                const date = new Date((hour.time)*1000).toLocaleString();
                let showTime = date.match(reTime)[0];
                let showDate = date.match(reDate)[0];
                return (
                  <li key={hour.time} >{showDate} {showTime}: windSpeed: {hour.windSpeed}, windGust: {hour.windGust}, {hour.summary}</li>
                )
              })
            }
          </ul>
        </ul>
      </div>
    )
  };

  render() {
    if (this.props.weather.length === 0) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      const weather = this.props.weather;
      return (
        <div>
          <h2>Weather</h2>
          {this.renderLocality(weather)}
          {this.renderCurrently(weather.currently)}
          {this.renderDaily(weather.daily)}
          {this.renderHourly(weather.hourly)}
        </div>
      )
    }
  }
}

// Real mapStateToProps
// const mapStateToProps = state => {
//   debugger;
//   return {
//     weather: state.weather
//   }
// }

// Mock mapStateToProps
const mapStateToProps = state => {
  return {
    weather: state.mockWeather
  }
}

export default connect(
  mapStateToProps,
  {
    fetchWeather,
    fetchMockWeather
  }
)(Weather);