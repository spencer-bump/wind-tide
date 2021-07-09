import React from 'react';
import { showHr, showHrMn, showAmPm } from '../utilities/displayTime';

const TidesSnapshot = ({ extremes, heights }) => {

  const timeNow = 1624747238;

  // TODO: use futureTimeNowVariable when converting
  //       from mock data.
  // convert to seconds and remove decimals
  // const futureTimeNowVariable = (Date.now()/1000).toFixed(0);

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

  // return (
  //     <div>
  //        Tide Latest Info for {`${showHr(timeNow)}${showAmPm(timeNow)}`}
  //        <div>
  //         {`Current Height: ${((heights).height).toFixed(1)}`}
  //        </div>
  //        <div>
  //         {`Next Extreme: ${showHrMn((extremes).timestamp)}${showAmPm((extremes).timestamp)}`}
  //        </div>

  //     </div>
  //   )



  return (
      <div>
         Tide Latest Info for {`${showHr(timeNow)} ${showAmPm(timeNow)}`}
         <div>
          {`Current Height: ${(heights[currentHeightIndex].height).toFixed(2)}`}
         </div>
         <div>
          {`Next Extreme: ${showHrMn(extremes[nextExtremeIndex].timestamp)} ${showAmPm(extremes[nextExtremeIndex].timestamp)}`}
         </div>

      </div>
    )
}


export default TidesSnapshot;