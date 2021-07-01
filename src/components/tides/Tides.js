import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTides, fetchMockTides } from '../../actions';
import Extremes from './Extremes';
import Heights from './Heights';
import TidesLocale from './TidesLocale';

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
      const tides = this.props.tides;
      return (
        <div>
          <h3>Tides</h3>
          <TidesLocale tides={tides} />
          <Extremes extremes={tides.extremes} />
          <Heights heights={tides.heights} />
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