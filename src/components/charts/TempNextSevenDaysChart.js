import React from 'react';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { showDay, showMoDay } from '../utilities/displayTime';

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
        <h3 className="ui header">{`Highs & Lows Forecast ${showMoDay(hours[0].time)} to ${showMoDay(hours[7].time)}`}</h3>
        <VictoryChart
          theme={VictoryTheme.material}
          maxDomain={{ y: maxTemperature*1.05}}
          minDomain={{ y: minTemperature*0.95}}
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

export default TempNextSevenDaysChart;