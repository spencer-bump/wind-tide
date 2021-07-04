import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme
  } from 'victory';
import { showAP, showHr } from '../utilities/displayTime';

const WindForecastChart = props => {
  const hours = (props.data).slice(0, 24); // 24 hr forecast
  const averageData = hours.map( hour => {
      return {
        "time": showHr(hour.time)+showAP(hour.time),
        "speed": hour.windSpeed
      }
    });
  const gustData = hours.map( hour => {
      return {
        "time": showHr(hour.time)+showAP(hour.time),
        "speed": hour.windGust
      }
    });
  const tickLabels = averageData.map((point, index) => {
      if (index % 3 === 0) {
          return point.time
      } else {
          return ""
      }
    });

  return (
    <div>
    <VictoryChart
      theme={VictoryTheme.material}
    >
      <VictoryLine
        data={averageData}
        x="time"
        y="speed"
      />
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={gustData}
        x="time"
        y="speed"
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
  );
};

export default WindForecastChart;