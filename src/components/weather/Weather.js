import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react'
// Actions
import { fetchWeather, fetchMockWeather, fetchMockTides } from '../../actions';
// Weather Components

// Wind Components
import WindCurrentlyList from './WindCurrentlyList';
import WindDailyList from './WindDailyList';
import WindHourlyList from './WindHourlyList';
import WindLocale from './WindLocale';
import WeatherFooter from './WeatherFooter';
// Tide Components
import TidesExtremeList       from '../tides/TidesExtremeList';
import TidesHeightList        from '../tides/TidesHeightList';
import TidesLocale            from '../tides/TidesLocale';
import TidesFooter            from '../tides/TidesFooter';
// Charts
import WindHourlyChart from '../charts/WindHourlyChart';
import TemperatureDailyHighLowChart from '../charts/TemperatureDailyHighLowChart';
import TemperatureHourlyChart from '../charts/TemperatureHourlyChart';
import TidesHeightChart       from '../charts/TidesHeightChart';



class Weather extends Component {

  componentDidMount() {
    this.props.fetchMockWeather();
    this.props.fetchMockTides();
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
        <WindCurrentlyList currently={weather.currently} />
        <div className="ui item">
          <WindHourlyChart data={weather.hourly.data} />
        </div>
        <div className="ui item">
          <TidesHeightChart heights={tides.heights} extremes={tides.extremes}/>
        </div>
        <div className="ui item">
          <TemperatureHourlyChart data={weather.hourly.data} />
        </div>
      </div>
    )
  }

  renderWind = (weather, tides) => {
    return (
      <div >
        <WindHourlyChart data={weather.hourly.data} />
        <WindDailyList timeNow={weather.currently.time} daily={weather.daily} />
        <WindHourlyList timeNow={weather.currently.time} hourly={weather.hourly} />
      </div>
    )
  }

  renderTides = (weather, tides) => {
    return (
      <div >
        <TidesLocale tides={tides} />
        <TidesExtremeList timeNow={tides.timestamp} extremes={tides.extremes} />
        <TidesHeightList timeNow={tides.timestamp} heights={tides.heights} />
        <TidesFooter tides={tides} />
      </div>
    )
  }

  renderTemps = (weather, tides) => {
    return (
      <div>
        <div className="ui segment">
          <TemperatureHourlyChart data={weather.hourly.data} />
        </div>
        <div className="ui segment">
          <TemperatureDailyHighLowChart data={weather.daily.data} />
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
          <WindLocale weather={weather} />
          <WeatherFooter weather={weather} />
        </div>
      )
    }
  }
}


// return (
//         <div>
//           <h3>{`Kanaha Beach Park`}</h3>
//           <div className="ui segment">
//             <WindHourlyChart data={hourly.data} />
//           </div>
//           <div className="ui segment">
//             <TemperatureDailyHighLowChart data={daily.data} />
//           </div>
//           <div className="ui segment">
//             <TemperatureHourlyChart data={hourly.data} />
//           </div>
//           <WindLocale weather={weather} />
//           <WindCurrentlyList currently={currently} />
//           <WindDailyList timeNow={timeNow} daily={daily} />
//           <WindHourlyList timeNow={timeNow} hourly={hourly} />
//           <WeatherFooter weather={weather} />
//         </div>
//       )


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
    fetchMockTides
  }
)(Weather);
