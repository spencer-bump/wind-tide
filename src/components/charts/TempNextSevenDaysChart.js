import React from 'react';
import {  VictoryAxis, VictoryLine,
          VictoryChart, VictoryTheme,
          VictoryLegend } from 'victory';
import { showDay, showMoDay, showMoDayYr } from '../utilities/displayTime';

const TempNextSevenDaysChart = props => {
  const hours = props.data.slice(0,24);
  let maxTemperature = 0;
  let minTemperature = 100;
  const highsData = hours.map( hour => {
    maxTemperature = maxTemperature < hour.temperatureMax ? hour.temperatureMax : maxTemperature;
    return {
      "time": showDay(hour.time),
      "highs": hour.temperatureMax
    }
  });
  const lowsData = hours.map( hour => {
    minTemperature = minTemperature > hour.temperatureMin ? hour.temperatureMin : minTemperature;
    return {
      "time": showDay(hour.time),
      "lows": hour.temperatureMin
    }
  });
  const tickLabels = highsData.map((point, index) => {
    if (index % 1 === 0) {
        return point.time
    } else {
        return ""
    }
  });
  return (
      <div>
        <h3 className="ui header">{`Temperatures: ${showMoDay(hours[0].time)} to ${showMoDayYr(hours[7].time)}`}</h3>
        <VictoryChart
          theme={VictoryTheme.material}
          maxDomain={{ y: maxTemperature*1.05}}
          minDomain={{ y: minTemperature*0.95}}
        >
          <VictoryLine
            data={highsData}
            x="time"
            y="highs"
            style={{
              data: { stroke: "blue", strokeWidth: 3 },
              parent: { border: "1px solid #ccc"}
            }}
          />
          <VictoryLine
            data={lowsData}
            x="time"
            y="lows"
            style={{
              data: { stroke: "#c43a31", strokeWidth: 3 },
              parent: { border: "1px solid #ccc"}
            }}
          />
          <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8]}
            tickFormat={tickLabels}
          />
          <VictoryAxis
            dependentAxis
            orientation="left"
          />
        </VictoryChart>
        <VictoryLegend x={60} y={0}
          orientation="horizontal"
          gutter={8}
          height={50}
          data={[
                  { name: "Highs", symbol: { fill: "blue"} },
                  { name: "Lows", symbol: { fill: "#c43a31" } }
                ]}
        />
      </div>
    );
};

export default TempNextSevenDaysChart;