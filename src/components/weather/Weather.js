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
  }


  // componentDidMount() {
  //   const fetch = this.props.fetchWeather;
  //   fetch();
  //   const currentTime = new Date().getTime();  //current unix timestamp
  //   // const execTime = new Date().setHours(4,30,0,0);  //API call time = today at 20:00
  //   const execTime = currentTime + 60000;
  //   let timeLeft = 0;
  //   if(currentTime < execTime) {
  //     //it's currently earlier than 20:00
  //     timeLeft = execTime - currentTime;
  //   } else {
  //     //it's currently later than 20:00, schedule for tomorrow at 20:00
  //     timeLeft = execTime + 86400000 - currentTime
  //   }
  //   setTimeout(function() {
  //     setInterval(function() {
  //       fetch();
  //       console.log("mock weather fetched");
  //     }, 300000, fetch);  //repeat every 5 min, 12/hr 288/day
  //   }, timeLeft, fetch);  //wait until 4:00 as calculated above
  // }

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
          <h3>{`Weather for ${showMoDayYr(timeNow)}`}</h3>
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
// state.weather
// const mapStateToProps = state => {
//   debugger;
//   return {
//     weather: state.weather
//   }
// }

// Mock mapStateToProps
// state.mockWeather
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
