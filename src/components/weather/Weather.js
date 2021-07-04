import React, { Component } from 'react';
import { connect } from 'react-redux';
// UTILITIES
import { showMoDayYr } from '../utilities/displayTime';
// ACTIONS
import { fetchWeather, fetchMockWeather } from '../../actions';
// COMPONENTS
import CurrentlyList from './CurrentlyList';
import DailyList from './DailyList';
import HourlyList from './HourlyList';
import LocaleWeather from './LocaleWeather';
import FooterWeather from './FooterWeather';


class Weather extends Component {

  componentDidMount() {
    this.props.fetchMockWeather();
    // this.props.fetchWeather();

  }

  render() {
    if (this.props.weather.length === 0) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      const weather = this.props.weather;
      let timeNow   = weather.currently.time;
      return (
        <div>
          <h2>{`Weather for ${showMoDayYr(timeNow)}`}</h2>
          <LocaleWeather weather={weather} />
          <CurrentlyList currently={weather.currently} />
          <DailyList timeNow={timeNow} daily={weather.daily} />
          <HourlyList timeNow={timeNow} hourly={weather.hourly} />
          <FooterWeather weather={weather} />
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
