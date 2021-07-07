import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react'
// Actions
import {
          fetchWeather,
          fetchMockWeather,
          fetchMockTides,
          fetchPlaceholder
        } from '../../actions';
// Weather Components
import WeatherFooter  from './WeatherFooter';
import WeatherLocale  from './WeatherLocale';

// Wind Components
import {
          DaWindCurrentlyList,
          DaWindDailyList,
          DaWindHourlyList
        } from '../wind';
// Tide Components
import {
          DaTidesExtremeList,
          DaTidesHeightList,
          DaTidesLocale,
          DaTidesFooter
        } from '../tides';
// Charts
import {
          DaWindHourlyChart,
          DaTempDailyHighLowChart,
          DaTempHourlyChart,
          DaTidesHeightChart
        }  from '../charts';



class Weather extends Component {

  componentDidMount() {
    this.props.fetchMockWeather();
    this.props.fetchMockTides();
    this.props.fetchPlaceholder();
  };


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

  renderSplash = (weather, tides) => {
    return (
      <div >
        <DaWindCurrentlyList currently={weather.currently} />
        <div className="ui segment">
          <DaWindHourlyChart data={weather.hourly.data} />
        </div>
        <div className="ui segment">
          <DaTidesHeightChart heights={tides.heights} extremes={tides.extremes}/>
        </div>
        <div className="ui segment">
          <DaTempHourlyChart data={weather.hourly.data} />
        </div>
      </div>
    )
  }

  renderWind = (weather, tides) => {
    return (
      <div >
        <DaWindHourlyChart data={weather.hourly.data} />
        <DaWindDailyList timeNow={weather.currently.time} daily={weather.daily} />
        <DaWindHourlyList timeNow={weather.currently.time} hourly={weather.hourly} />
      </div>
    )
  }

  renderTides = (weather, tides) => {
    return (
      <div >
        <DaTidesLocale tides={tides} />
        <DaTidesExtremeList timeNow={tides.timestamp} extremes={tides.extremes} />
        <DaTidesHeightList timeNow={tides.timestamp} heights={tides.heights} />
        <DaTidesFooter tides={tides} />
      </div>
    )
  }

  renderTemps = (weather, tides) => {
    return (
      <div>
        <div className="ui segment">
          <DaTempHourlyChart data={weather.hourly.data} />
        </div>
        <div className="ui segment">
          <DaTempDailyHighLowChart data={weather.daily.data} />
        </div>
      </div>
    )
  }


  render() {
    if (this.props.weather.length === 0 || this.props.tides.length === 0) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      const weather   = this.props.weather,
            tides     = this.props.tides;
      const panes = [
        { menuItem: 'Home', render: () => <Tab.Pane>{this.renderSplash(weather, tides)}</Tab.Pane> },
        { menuItem: 'Wind', render: () => <Tab.Pane>{this.renderWind(weather, tides)}</Tab.Pane> },
        { menuItem: 'Tides', render: () => <Tab.Pane>{this.renderTides(weather, tides)}</Tab.Pane> },
        { menuItem: 'Temps', render: () => <Tab.Pane>{this.renderTemps(weather, tides)}</Tab.Pane> }

      ]

      return (
        <div>
          <h3>{`Kanaha Beach Park`}</h3>
          <Tab panes={panes} />
          <WeatherLocale weather={weather} />
          <WeatherFooter weather={weather} />
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
    weather: state.mockWeather,
    tides: state.mockTides
  }
}

export default connect(
  mapStateToProps,
  {
    fetchWeather,
    fetchMockWeather,
    fetchMockTides,
    fetchPlaceholder
  }
)(Weather);
