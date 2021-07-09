import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryTheme } from 'victory';

import { showHr, showHrMn, showAmPm, showAP, showMoDay } from '../utilities/displayTime';

const TidesTodayChart = ({ heights, extremes }) => {
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

  const extremeTime = extremes.map( extreme => {
    return {
      "x": showHr(extreme.timestamp)+showAP(extreme.timestamp),
      "y": 0,
      "label": showHrMn(extreme.timestamp)+showAP(extreme.timestamp)
    }
  })

  // for Mock Data, change to "new Date().now()"
  const timeNow = 1624747238;

  let nextExtremeIndex = -1;
  if (timeNow < extremes[0].timestamp) {
      nextExtremeIndex = 0
  } else {
    for (let i = 0, len = extremes.length-1; i < len; i++) {
      if (extremes[i].timestamp <= timeNow && timeNow <= extremes[i+1].timestamp) {
        nextExtremeIndex = i + 1
        break;
      }
    }
  }

  let currentHeightIndex = -1;
  if (timeNow < heights[0].timestamp) {
    currentHeightIndex = 0
  } else {
    for (let i = 0, len = heights.length-1; i < len; i++ ) {
      if (heights[i].timestamp <= timeNow && timeNow < heights[i+1].timestamp) {
        currentHeightIndex = i;
        break;
      }
    }
    }


  const tickLabels = plotData.map((point, index) => {
      if (index % 3 === 0) {
          return point.time
      } else {
          return ""
      }
  });

  return (
      <div>
        <h3 className="ui header">{`Tides: ${showMoDay(heights[0].timestamp)} at ${showHrMn(timeNow)} ${showAmPm(timeNow)}`}</h3>
        <div className="ui segment">
          <div className="ui item">
            {`Current Height: ${(heights[currentHeightIndex].height).toFixed(2)}`}
          </div>
          <div className="ui item">
            {`Next Extreme: ${showHrMn(extremes[nextExtremeIndex].timestamp)} ${showAmPm(extremes[nextExtremeIndex].timestamp)}`}
          </div>
        </div>
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
          <VictoryScatter
            style={{ data: { fill: "#3140c4" } }}
            size={5}
            data={extremeTime}
            labels={({datum}) => `${datum.label}`}
          />
        </VictoryChart>
      </div>
  )
}

export default TidesTodayChart;
