import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine
} from 'victory';

const HeightPlot = props => {
  let heights = props.heights;
  console.log("heights: ",heights);
  let dataPlot = heights.map(height => {
    let timeStamp = new Date((height.timestamp)*1000).toLocaleTimeString();
    let showAmPm = timeStamp.match(new RegExp(/[AMP]+/i))[0];
    let showHrMn = timeStamp.match(new RegExp(/^\d+:\d+/i))[0];
    return {"time": showHrMn+showAmPm, "height": height.height }
  });
  console.log("dataPlot: ", dataPlot);
  return (
    <VictoryChart>
      <VictoryLine
        data={dataPlot}
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