import React, { Component } from 'react';
import { connect } from 'react-redux';
// actions
import { fetchTides, fetchMockTides } from '../../actions';
// components
import TidesExtremeList from './TiExtremeList';
import TidesHeightList from './TiHeightList';
import TidesLocale from './TiLocale';



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
      const tides = this.props.tides;
      return (
        <div>
          <h3 className="ui header">{`Kanaha Beach Park`}</h3>
          <TidesLocale tides={tides} />
          <TidesExtremeList timeNow={tides.timestamp} extremes={tides.extremes} />
          <TidesHeightList timeNow={tides.timestamp} heights={tides.heights} />
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
