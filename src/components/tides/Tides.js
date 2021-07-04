import React, { Component } from 'react';
import { connect } from 'react-redux';
// utilities
import { showMoDayYr } from '../utilities/displayTime';
// actions
import { fetchTides, fetchMockTides } from '../../actions';
// components
import ExtremeList from './ExtremeList';
import HeightList from './HeightList';
import HeightPlot from './HeightPlot';
import LocaleTides from './LocaleTides';
import Footer from './Footer';

class Tides extends Component {

  componentDidMount() {
    // this.props.fetchTides();
    this.props.fetchMockTides();
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
          <HeightPlot timeNow={timeNow} heights={tides.heights} />
          <Footer tides={tides} />
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
