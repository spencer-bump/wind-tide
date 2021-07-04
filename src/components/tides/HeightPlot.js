import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme
  } from 'victory';

const HeightPlot = props => {
  let heights = props.heights;
  let extremes = props.extremes;

  let plotData = heights.map((height, index) => {
    let timeStamp = new Date((height.timestamp)*1000).toLocaleTimeString();
    let showAmPm = timeStamp.match(new RegExp(/[AP]+/i))[0];
    let showHrMn = timeStamp.match(new RegExp(/^\d+/i))[0];
    return {"time": showHrMn+showAmPm, "height": height.height*3.28084, "showTime": showHrMn+showAmPm }
  });
  console.log(plotData);
  let extremeData = extremes.map(extreme => {
    let timeStamp = new Date((extreme.timestamp)*1000).toLocaleTimeString();
    let showAmPm = timeStamp.match(new RegExp(/[AP]+/i))[0];
    let showHrMn = timeStamp.match(new RegExp(/^\d+/i))[0];
    return {"x": showHrMn+showAmPm, "y": extreme.height*3.28084, "label": (extreme.height*3.28084).toFixed(1) }
  });
  console.log(extremeData)

  // console.log("heights: ",heights);
  // console.log("plotData: ", plotData);
  const tickLabels = plotData.map((point, index) => {
      if (index % 3 === 0) {
          return point.time
      } else {
          return ""
      }
  });

  return (
      <div>
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

export default HeightPlot;
