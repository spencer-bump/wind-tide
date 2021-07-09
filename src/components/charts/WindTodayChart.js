import React from 'react';
import {  VictoryAxis, VictoryChart,
          VictoryLegend, VictoryLine,
          VictoryTheme } from 'victory';
import { showAP, showAmPm, showHr, showHrMn, showMoDay, showMoDayYr } from '../utilities/displayTime';
import { degreeToCompass, uvRating } from '../utilities';

const WindTodayChart = ({ data, currently }) => {
  const hours = data.slice(0, 24); // 24 hr forecast
  let minAverage = 100;
  let maxGust = 0;
  const averageData = hours.map( hour => {
      minAverage = minAverage > hour.windSpeed ? hour.windSpeed : minAverage;
      return {
        "time": showHr(hour.time)+showAP(hour.time),
        "speed": hour.windSpeed
      }
    });
  const gustData = hours.map( hour => {
      maxGust = maxGust < hour.windGust ? hour.windGust : maxGust;
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
      <h3 className="ui header">{`Winds for ${showMoDay(hours[0].time)} at ${showHrMn(currently.time)} ${showAmPm(currently.time)}`}</h3>
      <div className="ui segment">
        <div className="ui item">{`Currently: ${degreeToCompass(currently.windBearing)} at ${(currently.windSpeed).toFixed(0)} gusting to ${(currently.windGust).toFixed(0)} mph`}</div>
      </div>
      <VictoryChart
        theme={VictoryTheme.material}
        minDomain={{ y: minAverage*0.8 }}
        maxDomain={{ y: maxGust*1.2}}
      >
        <VictoryLine
          data={averageData}
          x="time"
          y="speed"
          style={{
            data: { stroke: "blue", strokeWidth: 3 },
            parent: { border: "1px solid #ccc"}
          }}
        />
        <VictoryLine
          data={gustData}
          x="time"
          y="speed"
          style={{
            data: { stroke: "#c43a31", strokeWidth: 3 },
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
                  { name: "Average", symbol: { fill: "blue"} },
                  { name: "Gust", symbol: { fill: "#c43a31" } }
                ]}
          />
    </div>
  );
};

export default WindTodayChart;
