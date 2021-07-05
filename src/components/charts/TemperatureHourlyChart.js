import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme
  } from 'victory';
import { showAP, showHr, showMoDay } from '../utilities/displayTime';

const TemperatureHourlyChart = props => {
  const hours = props.data.slice(0,24);
  const temperatureData = hours.map( hour => {
      return {
        "time": showHr(hour.time)+showAP(hour.time),
        "temperature": hour.temperature
      }
    });
  const tickLabels = temperatureData.map((point, index) => {
      if (index % 3 === 0) {
          return point.time
      } else {
          return ""
      }
    });


  return (
      <div>
        <h3 className="ui header">{`Hourly Temp Forecast ${showMoDay(hours[0].time)} to ${showMoDay(hours[7].time)}`}</h3>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            data={temperatureData}
            x="time"
            y="temperature"
          />
          <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}
            tickFormat={tickLabels}
          />
          <VictoryAxis
            dependentAxis
          />
        </VictoryChart>
      </div>
    )
}

export default TemperatureHourlyChart;