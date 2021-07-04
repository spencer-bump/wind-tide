import React, { Component } from 'react';
import { connect } from 'react-redux';
// utilities
import { showMoDayYr } from '../utilities/displayTime';
// actions
import { fetchTides, fetchMockTides } from '../../actions';
// components
import ExtremeList from './ExtremeList';
import HeightList from './HeightList';
import LocaleTides from './LocaleTides';
import FooterTides from './FooterTides';

class Tides extends Component {

  componentDidMount() {
    // this.props.fetchTides();
    this.props.fetchMockTides();
    const currentTime = new Date().getTime();  //current unix timestamp
    const execTime = new Date().setHours(20,0,0,0);  //API call time = today at 20:00
    let timeLeft;
    if(currentTime < execTime) {
      //it's currently earlier than 20:00
      timeLeft = execTime - currentTime;
    } else {
      //it's currently later than 20:00, schedule for tomorrow at 20:00
      timeLeft = execTime + 86400000 - currentTime
    }
    // setTimeout(function() {
    //   setInterval(function() {

    //     //your code

    //   }, 86400000);  //repeat every 24h
    // }, timeLeft);  //wait until 20:00 as calculated above
  };

  render() {
    if (this.props.tides.length === 0) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      let tides = this.props.tides;
      let timeNow   = tides.timestamp;
      return (
        <div>
          <h3 className="ui header">{`Tides for ${showMoDayYr(tides.timestamp)}`}</h3>
          <LocaleTides tides={tides} />
          <ExtremeList timeNow={timeNow} extremes={tides.extremes} />
          <HeightList timeNow={timeNow} heights={tides.heights} />
          <FooterTides tides={tides} />
        </div>
      )
    }
  }
}


const mapStateToProps = state => {
  // return {
  //   tides: state.tides
  // }
  return {
    tides: state.mockTides
  }
}

export default connect(
  mapStateToProps,
  {
    fetchTides,
    fetchMockTides
  }
)(Tides);
