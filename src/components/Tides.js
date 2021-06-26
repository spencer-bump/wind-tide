import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTides, fetchMockTides } from '../actions';

class Tides extends Component {

  // Real Tides
  // componentDidMount() {
  //   this.props.fetchTides();
  // }

    // Mock tides
  componentDidMount() {
    this.props.fetchMockTides();
  }

  renderTides = () => {
    const tides = this.props.tides;
    if (!tides) {
      return <div>Loading ...</div>
    }
    if (tides) {
        return (
          <div>
            <ul>
              <li>copyright: {tides.copyright}</li>
              <li>datetime: {tides.datetime}</li>
              <li>disclaimer: {tides.disclaimer}</li>
              <li>latitude: {tides.latitude}</li>
              <li>longitude: {tides.longitude}</li>
              <li>status: {tides.status}</li>
              <li>timestamp: {tides.timestamp}</li>
              <li>timezone: {tides.timezone}</li>
              <li>unit: {tides.unit}</li>
              <li>extremes: {tides.extremes.length}</li>
              <li>heights: {tides.heights.length}</li>
              {/*<li>origin: {tides.origin}</li>*/}
              {/*<li>datums: {tides.datums}</li>*/}
            </ul>
          </div>
        )
    }
  }


  render() {
    if (this.props.tides.length === 0) {
      return (
        <div>
          Loading ...
        </div>
      )
    } else {
      return (
        <div>
          <h3>Tides</h3>
          {this.renderTides()}
        </div>
      )
    }
  }
}

// Real mapStateToProps
// const mapStateToProps = state => {
//   debugger;
//   return {
//     tides: state.tides
//   }
// }

// Mock mapStateToProps
const mapStateToProps = state => {
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