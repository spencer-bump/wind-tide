import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTides, fetchMockTides } from '../actions';

class Tides extends Component {

  componentDidMount() {
    // this.props.fetchTides();
    this.props.fetchMockTides();
  };

  renderTides = tides => {
    const date = new Date((tides.timestamp)*1000).toLocaleString();
    return (
      <div>
        <ul>
          <li>copyright: {tides.copyright}</li>
          <li>datetime: {tides.datetime}</li>
          <li>disclaimer: {tides.disclaimer}</li>
          <li>latitude: {tides.latitude}</li>
          <li>longitude: {tides.longitude}</li>
          <li>status: {tides.status}</li>
          <li>timestamp: {date}</li>
          <li>timezone: {tides.timezone}</li>
          <li>unit: {tides.unit}</li>
        </ul>
      </div>
    )
  };

  renderExtremes = tides => {
    let reDate = new RegExp(/^\d+\/\d+/i);
    let reTime = new RegExp(/\d+:\d+:\d+ \S+/i);
    return (
      <div>
        Extremes:
        {
          tides.extremes.map(extreme => {
            const date = new Date((extreme.timestamp)*1000).toLocaleString();
            let showTime = date.match(reTime)[0];
            let showDate = date.match(reDate)[0];
            return <li key={extreme.timestamp} >{(extreme.height*3.28084).toFixed(2)} ft  {extreme.state} at {showTime} {showDate} </li>
          })
        }
      </div>
    );
  };

  renderHeights = tides => {
    let reDate = new RegExp(/^\d+\/\d+/i);
    let reTime = new RegExp(/\d+:\d+:\d+ \S+/i);
    return (
      <div>
        Heights:
        {
          tides.heights.map(height => {
            const date = new Date((height.timestamp)*1000).toLocaleString();
            let showTime = date.match(reTime)[0];
            let showDate = date.match(reDate)[0];
            return <li key={height.timestamp} >{(height.height*3.28084).toFixed(2)} ft {height.state} at {showTime} {showDate}</li>
          })
        }

      </div>
    )
  }


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
          {this.renderTides(tides)}
          {this.renderExtremes(tides)}
          {this.renderHeights(tides)}
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