import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine
} from 'victory';

const HeightPlot = props => {
  let heights = props.heights;

  let plotData = heights.map(height => {
    let timeStamp = new Date((height.timestamp)*1000).toLocaleTimeString();
    let showAmPm = timeStamp.match(new RegExp(/[AP]+/i))[0];
    let showHrMn = timeStamp.match(new RegExp(/^\d+/i))[0];
    return {"time": showHrMn+showAmPm, "height": height.height }
  });
  // console.log("heights: ",heights);
  // console.log("plotData: ", plotData);
  return (
    <VictoryChart>
      <VictoryLine
        data={plotData}
        interpolation="natural"
        x="time"
        y="height"
       />
      {/*<VictoryAxis
        axis={"stroke"="transparent"},
        ticks={"stroke"="transparent"},
        tickLabels={"fill"="transparent"}
      />*/}
    </VictoryChart>

  )
}

export default HeightPlot;