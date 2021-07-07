import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme
  } from 'victory';
import { showDay, showMoDay } from '../utilities/displayTime';


const WindDailyChart = props => {
  const daily = props.data;
  const averageData = daily.map( day => {
    return { "day": showDay(day.time), "speed": day.windSpeed }
  });

  const gustData = daily.map( day => {
    return { "day": showDay(day.time), "speed": day.windGust}
  });

  const tickLabels = averageData.map((point, index) => {

        return point.day

  });



  return(
    <div>
      <h3 className="ui header">{`Daily Wind Forecast ${showMoDay(daily[0].time)} to ${showMoDay(daily[7].time)}`}</h3>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          data={averageData}
          x="day"
          y="speed"
        />
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          data={gustData}
          x="day"
          y="speed"
        />
        <VictoryAxis
          tickValues={[1,2,3,4,5,6,7,8]}
          tickFormat={tickLabels}
        />
        <VictoryAxis
          dependentAxis
        />
      </VictoryChart>
    </div>
  )
}

export default WindDailyChart;