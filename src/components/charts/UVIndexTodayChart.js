import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine,
         VictoryTheme, VictoryStack, VictoryArea,
         VictoryLegend,VictoryScatter } from 'victory';
import { showAP, showAmPm, showHr, showHrMn, showMoDay } from '../utilities/displayTime';
import { uvRating } from '../utilities';

const UVIndexTodayChart = ({ data, currently }) => {
  const hours = data.slice(0,24);
  const uvIndexData = hours.map( hour => {
      return {
        "time": showHr(hour.time)+showAP(hour.time),
        "uvIndex": hour.uvIndex
      }
    });
  const scatterData = hours.map( hour => {
    return {
      "x": showHr(hour.time)+showAP(hour.time),
      "y": hour.uvIndex
    }
  });
  const tickLabels = uvIndexData.map((point, index) => {
      if (index % 3 === 0) {
          return point.time
      } else {
          return ""
      }
    });

  const stackDataOne = () => {
    let data = [];
    for (let i = 1; i <= 24; i++) {
      data.push({x: i, y: 1})
    }
    return data;
  }

  const stackDataTwo = () => {
    let data = [];
    for (let i = 1; i <= 24; i++) {
      data.push({x: i, y: 2})
    }
    return data;
  }
  const stackDataThree = () => {
    let data = [];
    for (let i = 1; i <= 24; i++) {
      data.push({x: i, y: 3})
    }
    return data;
  }




  return (
      <div className="ui container">
        <h3 className="ui header">{`UV Index: ${showMoDay(hours[0].time)} at ${showHrMn(currently.time)} ${showAmPm(currently.time)}`}</h3>
        <div className="ui segment">
          {`Now: UV is ${uvRating(currently.uvIndex)} at ${currently.uvIndex}`}
        </div>
        <VictoryChart
          theme={VictoryTheme.material}
          maxDomain={{ y: 11 }}
        >
          <VictoryAxis
            tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}
            tickFormat={tickLabels}
          />
          <VictoryAxis
            dependentAxis
          />
          <VictoryStack
            colorScale={["lightblue", "yellow", "gold", "tomato", "purple"]}
          >
            <VictoryArea
              data={stackDataTwo()}
            />
            <VictoryArea
              data={stackDataThree()}
            />
            <VictoryArea
              data={stackDataTwo()}
            />
            <VictoryArea
              data={stackDataThree()}
            />
            <VictoryArea
              data={stackDataOne()}
            />
          </VictoryStack>
          <VictoryLine
            data={uvIndexData}
            x="time"
            y="uvIndex"
          />
          <VictoryScatter
            style={{ data: { fill: "#3140c4" } }}
            size={3}
            data={scatterData}
          />
        </VictoryChart>
        <VictoryLegend x={60} y={0}
          orientation="horizontal"
          gutter={8}
          height={20}
          data={[
                  { name: "Low", symbol: { fill: "lightblue"} },
                  { name: "Mod", symbol: { fill: "yellow" } },
                  { name: "High", symbol: { fill: "gold" } },
                  { name: "Very High", symbol: { fill: "tomato" } },
                  { name: "Extreme", symbol: { fill: "purple" } }
                ]}
          />
      </div>
    )
}

export default UVIndexTodayChart;