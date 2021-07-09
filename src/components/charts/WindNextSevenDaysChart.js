import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory';
import { showDay, showMoDay } from '../utilities/displayTime';

const WindNextSevenDaysChart = ({ data }) => {
  const averageData = data.map( day => {
    return { "day": showDay(day.time), "speed": day.windSpeed }
  });
  const gustData = data.map( day => {
    return { "day": showDay(day.time), "speed": day.windGust}
  });
  const tickLabels = averageData.map((point, index) => {
    return point.day
  });

  return(
    <div>
      <h3 className="ui header">{`Wind Forecast ${showMoDay(data[0].time)} to ${showMoDay(data[7].time)}`}</h3>
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
         <VictoryLegend x={60} y={0}
          orientation="horizontal"
          gutter={8}
          height={50}
          data={[
                  { name: "Average (mph)", symbol: { fill: "black"} },
                  { name: "Gust (mph)", symbol: { fill: "#c43a31" } }
                ]}
          />
    </div>
  )
}

export default WindNextSevenDaysChart;