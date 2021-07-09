const findCurrentTideHeight = ({ heights }) => {
  const timeNow = 1624747238;
  // TODO: use futureTimeNowVariable when converting
  //       from mock data.
  // convert to seconds and remove decimals
  // const futureTimeNowVariable = (Date.now()/1000).toFixed(0);
  if (timeNow < heights[0].timestamp) {
    return heights[0];
  } else {
    for (let i = 0, len = heights.length-1; i < len; i++ ) {
      if (heights[i].timestamp <= timeNow && timeNow < heights[i+1].timestamp) {
        return heights[i];
      }
    }
    return heights[heights.length]
  }
}

export default findCurrentTideHeight;
