import React from 'react';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { showDay, showMoDay } from '../utilities/displayTime';
// *******
// pulled from view until new mock data or api calls
// ******
const RainNextSevenDaysChart = props => {
  const days = props.data.slice(0,24);
  let maxProbability = 0;
  let minProbability = 1.0;
  const rainPrecipProb = days.map( day => {
      maxProbability = maxProbability < day.precipProbability ? day.precipProbability : maxProbability;
      minProbability = minProbability > day.precipProbability ? day.precipProbability : minProbability;

      return {
        "time": showDay(day.time),
        "probability": (day.precipProbability)*100
      }
    });
  const tickLabels = rainPrecipProb.map((point, index) => {
        return point.time
  });
  return (
      <div>
        <h3 className="ui header">{`Rain Probability: ${showMoDay(days[0].time)} to ${showMoDay(days[7].time)}`}</h3>
        <VictoryChart
          theme={VictoryTheme.material}
          minDomain={{ y: 0 }}
        >
          <VictoryLine
            data={rainPrecipProb}
            x="time"
            y="probability"
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
      </div>
    );
};


export default RainNextSevenDaysChart;
