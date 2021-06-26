import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather, fetchMockWeather, fetchTides, fetchMockTides } from '../actions';

class Weather extends Component {

  // Real Weather API
  // componentDidMount() {
  //   this.props.fetchWeather();
  // }

    // Mock weather
    componentDidMount() {
    this.props.fetchMockWeather();
    this.props.fetchMockTides();
  }

  renderCurrently = () => {
    const currently = this.props.weather.currently;
    if (!currently) {
      return <div>Loading ...</div>
    }
    if (currently) {
        return (
          <div>
            <ul>
              <li>time: {currently.time}</li>
              <li>summary: {currently.summary}</li>
              <li>icon: {currently.icon}</li>
              <li>nearestStormDistance: {currently.nearestStormDistance}</li>
              <li>nearestStormBearing: {currently.nearestStormBearing}</li>
              <li>precipIntensity: {currently.precipIntensity}</li>
              <li>precipProbability: {currently.precipProbability}</li>
              <li>temperature: {currently.temperature}</li>
              <li>apparentTemperature: {currently.apparentTemperature}</li>
              <li>dewPoint: {currently.dewPoint}</li>
              <li>humidity: {currently.humidity}</li>
              <li>pressure: {currently.pressure}</li>
              <li>windSpeed: {currently.windSpeed}</li>
              <li>windGust: {currently.windGust}</li>
              <li>windBearing: {currently.windBearing}</li>
              <li>cloudCover: {currently.cloudCover}</li>
              <li>uvIndex: {currently.uvIndex}</li>
              <li>visibility: {currently.visibility}</li>
              <li>ozone: {currently.ozone}</li>
            </ul>
          </div>
        )
    }
  }

  renderLocality = () => {
    const currently = this.props.weather.currently;
    if (!currently) {
      return <div>Loading ...</div>
    }
    if (currently) {
      return (
        <div>
          <ul>
            <li>timezone:  {this.props.weather.timezone}</li>
            <li>latitude:  {this.props.weather.latitude}</li>
            <li>longitude:  {this.props.weather.longitude}</li>
            <li>
              <p>Hourly Summary: {this.props.weather.hourly.summary}</p>
            </li>
            <li>
              <p>Daily Summary: {this.props.weather.daily.summary}</p>
            </li>
          </ul>
        </div>
      )
    }
  }

  renderTides = () => {
    const currently = this.props.weather.currently;
    if (!currently) {
      return <div>Loading ...</div>
    }
    if (currently) {
      debugger;
      return (
        <div>
          renderTides
        </div>
      )
    }
  }



  render() {
    if (this.props.weather.length === 0) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      return (
        <div>
          {this.renderLocality()}
          {this.renderCurrently()}
          {this.renderTides()}
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
    weather: state.mockWeather,
    tides: state.mockTides
  }
}

export default connect(
  mapStateToProps,
  {
    fetchWeather,
    fetchMockWeather,
    fetchTides,
    fetchMockTides
  }
)(Weather);