import React from 'react';
import {  VictoryAxis, VictoryChart,
          VictoryLine, VictoryTheme,
          VictoryLegend } from 'victory';
import {  showAmPm, showAP,
          showHr, showHrMn,
          showMoDay } from '../utilities/displayTime';

const TempTodayChart = ({ data, currently }) => {
  const hours = data.slice(0,24);
  let minTemperature = 200;
  let maxTemperature = 0;
  const temperatureData = hours.map( hour => {
    minTemperature = minTemperature > hour.temperature ? hour.temperature : minTemperature;
    maxTemperature = maxTemperature < hour.temperature ? hour.temperature : maxTemperature;
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
        <h3 className="ui header">{`Temperatures: ${showMoDay(hours[0].time)} at ${showHrMn(currently.time)} ${showAmPm(currently.time)}`}</h3>
        <div className="ui segment">
          <div className="ui item">{`Now:  ${currently.temperature.toFixed(0)} F`}</div>
        </div>
        <VictoryChart
          theme={VictoryTheme.material}
          minDomain={{ y: minTemperature*.9}}
          maxDomain={{ y: maxTemperature*1.1}}
        >
          <VictoryLine
            data={temperatureData}
            x="time"
            y="temperature"
            style={{
              data: { stroke: "tomato", strokeWidth: 3 },
              parent: { border: "1px solid #ccc"}
            }}
          />
          <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}
            tickFormat={tickLabels}
          />
          <VictoryAxis
            dependentAxis
          />
        </VictoryChart>
        <VictoryLegend x={100} y={0}
          orientation="horizontal"
          gutter={8}
          height={20}
          data={[
                  { name: "Degrees Farenheight", symbol: { fill: "tomato"} }
                ]}
          />
      </div>
    )
}

export default TempTodayChart;