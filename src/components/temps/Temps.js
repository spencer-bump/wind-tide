import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMockWeather } from '../../actions';

class Temps extends Component {

  componentDidMount() {
    if (this.props.weather.length === 0) {
      this.props.fetchMockWeather()
    }
    console.log("Temps: ", this.props.weather);
    console.log("Temps hourly: ", this.props.weather.hourly);
  };

  render() {
    return (
      <div>
        Temps
      </div>
    );
  };
};

const mapStateToProps =  state => {
  return {
    weather: state.mockWeather
  };
};

export default connect(mapStateToProps,
  {
    fetchMockWeather
  }
)(Temps);
