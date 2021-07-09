import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory';
import { showDay, showMoDay, showMoDayYr } from '../utilities/displayTime';

const WindNextSevenDaysChart = ({ data }) => {
  let minAverage = 100;
  let maxGust = 0;
  const averageData = data.map( day => {
    minAverage = minAverage > day.windSpeed ? day.windSpeed : minAverage;
    return { "day": showDay(day.time), "speed": day.windSpeed }
  });
  const gustData = data.map( day => {
    maxGust = maxGust < day.windGust ? day.windGust : maxGust;
    return { "day": showDay(day.time), "speed": day.windGust}
  });
  const tickLabels = averageData.map((point, index) => {
    return point.day
  });

  return(
    <div>
      <h3 className="ui header">{`Winds: ${showMoDay(data[0].time)} to ${showMoDayYr(data[7].time)}`}</h3>
      <VictoryChart
        theme={VictoryTheme.material}
        maxDomain={{ y: maxGust*1.1}}
        minDomain={{ y: minAverage*0.9}}
      >
        <VictoryLine
          data={averageData}
          x="day"
          y="speed"
          style={{
            data: { stroke: "blue", strokeWidth: 3 },
            parent: { border: "1px solid #ccc"}
          }}
        />
        <VictoryLine

          data={gustData}
          x="day"
          y="speed"
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
        />
      </VictoryChart>
       <VictoryLegend x={60} y={0}
        orientation="horizontal"
        gutter={8}
        height={50}
        data={[
                { name: "Average (mph)", symbol: { fill: "blue"} },
                { name: "Gust (mph)", symbol: { fill: "#c43a31" } }
              ]}
        />
    </div>
  )
}

export default WindNextSevenDaysChart;