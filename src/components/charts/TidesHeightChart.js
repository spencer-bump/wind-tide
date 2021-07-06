
import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme
  } from 'victory';

import { showHr, showAP, showMoDay } from '../utilities/displayTime';

const TidesHeightChart = props => {
  const heights = props.heights,
        extremes = props.extremes;
  const plotData = heights.map((height, index) => {
    return {
      "time": showHr(height.timestamp)+showAP(height.timestamp),
      "height": height.height*3.28084
    }
  });
  const extremeData = extremes.map(extreme => {
    return {
      "x": showHr(extreme.timestamp)+showAP(extreme.timestamp),
      "y": extreme.height*3.28084,
      "label": (extreme.height*3.28084).toFixed(1)
    }
  });
  const tickLabels = plotData.map((point, index) => {
      if (index % 3 === 0) {
          return point.time
      } else {
          return ""
      }
  });

  return (
      <div>
        <h3 className="ui header">{`Tides for ${showMoDay(heights[0].timestamp)}`}</h3>
        <VictoryChart
          theme={VictoryTheme.material}
          minDomain={{y: -2.0}}
          maxDomain={{y: 2.0}}
        >
          <VictoryLine
          data={plotData}
          interpolation="natural"
          x="time"
          y="height"
         />
         <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}
            tickFormat={tickLabels}
          />
          <VictoryAxis
            dependentAxis
          />
          <VictoryScatter
            style={{ data: { fill: "#c43a31" } }}
            size={7}
            data={extremeData}
            labels={({datum}) => `${datum.label}`}
          />
        </VictoryChart>
      </div>
  )
}

export default TidesHeightChart;
