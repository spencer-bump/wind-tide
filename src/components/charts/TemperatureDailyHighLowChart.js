import React from 'react';
import {
          VictoryAxis,
          VictoryBar,
          VictoryLine,
          VictoryChart,
          VictoryTheme
        } from 'victory';
import { showAP, showDay, showMoDay } from '../utilities/displayTime';

const TemperatureDailyHighLowChart = props => {
  const hours = props.data.slice(0,24);
  const highsData = hours.map( hour => {
      return {
        "time": showDay(hour.time),
        "highs": hour.temperatureMax
      }
    });
  const lowsData = hours.map( hour => {
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
        <h3 className="ui header">{`Highs & Lows Forecast ${showMoDay(hours[0].time)} to ${showMoDay(hours[7].time)}`}</h3>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            data={highsData}
            x="time"
            y="highs"
          />
          <VictoryLine
            data={lowsData}
            x="time"
            y="lows"
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

export default TemperatureDailyHighLowChart;