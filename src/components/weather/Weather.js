import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather, fetchMockWeather } from '../../actions';
import Currently from './Currently';
import Daily from './Daily';
import Hourly from './Hourly';
import WeatherLocale from './WeatherLocale';

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
          <WeatherLocale weather={weather} />
          <Currently currently={weather.currently} />
          <Daily daily={weather.daily} />
          <Hourly hourly={weather.hourly} />
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
