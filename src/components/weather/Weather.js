import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';

import { showMoDayYr, showAmPm, showHrMn } from '../utilities/displayTime';
import { fetchMongoDBWeather, fetchExpressTides, fetchWeather, fetchPlaceholder }
        from '../../actions';
import { WindWeekList, WindTodayList }
        from '../wind';
import { TidesTodayExtremeList, TidesTodayHeightList, TidesFooter }
         from '../tides';
import { WindTodayChart, TempNextSevenDaysChart, TempTodayChart,
         TidesTodayChart, WindNextSevenDaysChart, UVIndexTodayChart,
         RainNextSevenDaysChart, RainTodayChart }
         from '../charts';
import WeatherFooter  from './WeatherFooter';
import WeatherIo from './WeatherIo';


class Weather extends Component {

  componentDidMount() {
    // this.props.fetchNewTides();
    this.props.fetchPlaceholder();
    this.props.fetchExpressTides();
    this.props.fetchMongoDBWeather();

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
            <TidesTodayExtremeList timeNow={tides.timestamp} extremes={tides.extremes} />
          </div>
          <div className="ui item">
            <TidesTodayHeightList timeNow={tides.timestamp} heights={tides.heights} />
          </div>
        </div>
        <WeatherFooter weather={weather} />
        <TidesFooter tides={tides} />
      </div>
    )
  }


  render() {
    if (this.props.weather.length         === 0 ||
        this.props.tides.length           === 0 ||
        this.props.placeholder.length     === 0  ) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      const weather = this.props.weather[0],
            tides = this.props.tides,
            placeholder = this.props.placeholder;

      const panes = [
        { menuItem: 'Today', render: () => <Tab.Pane>{this.renderToday(weather, tides)}</Tab.Pane> },
        { menuItem: 'Next 7 Days', render: () => <Tab.Pane>{this.renderNextSevenDays(weather, tides)}</Tab.Pane> },
        { menuItem: 'Lists', render: () => <Tab.Pane>{this.renderLists(weather, tides)}</Tab.Pane> }
      ];
      console.log("mongoDb props data : ", weather)

      return (
        <div>
          <h3>{`Kanaha Beach ${showMoDayYr(weather.currently.time)} at ${showHrMn(weather.currently.time)} ${showAmPm(weather.currently.time)}`}</h3>
          <WeatherIo />
          <Tab panes={panes} />


        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    weather: state.mongodbWeather,
    tides: state.expressTides,
    placeholder: state.placeholder
  }
}

export default connect(
  mapStateToProps,
  {
    fetchExpressTides,
    fetchWeather,
    fetchPlaceholder,
    fetchMongoDBWeather
  }
)(Weather);
