import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react'
import { fetchWeather, fetchMockWeather, fetchMockTides, fetchPlaceholder }
        from '../../actions';
import { WindCurrentlyList, WindWeekList, WindTodayList }
        from '../wind';
import { TidesExtremeList, TidesHeightList, TidesFooter, TidesSnapshot }
         from '../tides';
import { WindTodayChart, TempNextSevenDaysChart, TempTodayChart,
         TidesTodayChart, WindNextSevenDaysChart, UVIndexTodayChart,
         VictoryStackChart, RainNextSevenDaysChart, RainTodayChart }
         from '../charts';
import { showAmPm, showHrMn, showMoDayYr } from '../utilities/displayTime';
import WeatherFooter  from './WeatherFooter';

class Weather extends Component {

  componentDidMount() {
    this.props.fetchMockWeather();
    this.props.fetchMockTides();
    // this.props.fetchNewTides();
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

  renderToday = (weather, tides) => {
    return (
      <div >
        <div className="ui segment">
          <WindTodayChart data={weather.hourly.data} currently={weather.currently}/>
        </div>
        <div className="ui segment">
          <TempTodayChart data={weather.hourly.data} currently={weather.currently} />
        </div>
        <div className="ui segment">
          <UVIndexTodayChart data={weather.hourly.data} currently={weather.currently} />
        </div>
{/*        <div className="ui segment">
          <RainTodayChart data={weather.hourly.data} currently={weather.currently} />
        </div>*/}
        <div className="ui segment">
          <TidesTodayChart heights={tides.heights} extremes={tides.extremes}/>
        </div>
         <div className="ui segment">
          <WeatherFooter weather={weather} />
        </div>
         <div className="ui segment">
          <TidesFooter tides={tides} />
        </div>
      </div>
    )
  }

  renderNextSevenDays = (weather, tides) => {
    return (
      <div >
        <div className="ui segment">
          <WindNextSevenDaysChart data={weather.daily.data} />
        </div>
        <div className="ui segment">
          <TempNextSevenDaysChart data={weather.daily.data} />
        </div>
{/*        <div className="ui segment">
          <RainNextSevenDaysChart data={weather.daily.data} />
        </div>*/}
        <div className="ui segment">
          <WeatherFooter weather={weather} />
        </div>

      </div>
    )
  }


  renderLists = (weather, tides) => {
    return (
      <div>
        <div className="ui list">
          <div className="ui item">
            <WindWeekList timeNow={weather.currently.time} daily={weather.daily} />
          </div>
          <div className="ui item">
            <WindTodayList timeNow={weather.currently.time} hourly={weather.hourly} />
          </div>
          <div className="ui item">
            <TidesExtremeList timeNow={tides.timestamp} extremes={tides.extremes} />
          </div>
          <div className="ui item">
            <TidesHeightList timeNow={tides.timestamp} heights={tides.heights} />
          </div>
        </div>
        <WeatherFooter weather={weather} />
        <TidesFooter tides={tides} />
      </div>
    )
  }


  render() {
    if (this.props.weather.length === 0 ||
        this.props.placeholder.length === 0 ||
        this.props.tides.length === 0) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      const weather   = this.props.weather,
            tides     = this.props.tides,
            placeholder = this.props.placeholder;
      const panes = [
        { menuItem: 'Today', render: () => <Tab.Pane>{this.renderToday(weather, tides)}</Tab.Pane> },
        { menuItem: 'Next 7 Days', render: () => <Tab.Pane>{this.renderNextSevenDays(weather, tides)}</Tab.Pane> },
        { menuItem: 'Lists', render: () => <Tab.Pane>{this.renderLists(weather, tides)}</Tab.Pane> }

      ]

      return (
        <div>
          <h3>{`Kanaha Beach Park`}</h3>
          <Tab panes={panes} />


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
    tides: state.mockTides,
    placeholder: state.placeholder
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
