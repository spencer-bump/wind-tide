import React from 'react';
import {  VictoryAxis, VictoryLine,
          VictoryChart, VictoryTheme,
          VictoryLegend } from 'victory';
import { showAP, showHr, showMoDay } from '../utilities/displayTime';
// *******
// pulled from view until new mock data or api calls
// ******
const RainTodayChart = ({ data, currently}) => {
  const hours = data.slice(0,24);
  let maxProbability = 0;
  let minProbability = 1.0;
  const rainPrecipProb = hours.map( hour => {
      maxProbability = maxProbability < hour.precipProbability ? hour.precipProbability : maxProbability;
      minProbability = minProbability > hour.precipProbability ? hour.precipProbability : minProbability;
      return {
        "time": showHr(hour.time)+showAP(hour.time),
        "probability": (hour.precipProbability)*100
      }
    });
  const tickLabels = rainPrecipProb.map((point, index) => {
      if (index % 3 === 0) {
          return point.time
      } else {
          return ""
      }
    });
  return (
      <div>
        <h3 className="ui header">{`Rain Probability: ${showMoDay(hours[0].time)}`}</h3>

        <VictoryChart
          theme={VictoryTheme.material}
          minDomain={{ y: minProbability*80 }}
          maxDomain={{ y: maxProbability*120}}
        >
          <VictoryLine
            data={rainPrecipProb}
            x="time"
            y="probability"
            style={{
              data: { stroke: "blue", strokeWidth: 3 },
              parent: { border: "1px solid #ccc"}
            }}
          />
          <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}
            tickFormat={tickLabels}
          />
          <VictoryAxis
            dependentAxis
            orientation="left"

          />
        </VictoryChart>
        <VictoryLegend x={100} y={0}
          orientation="horizontal"
          gutter={8}
          height={20}
          data={[
                  { name: "Percent Rain", symbol: { fill: "blue"} }
                ]}
          />
      </div>
    );
};


export default RainTodayChart;

