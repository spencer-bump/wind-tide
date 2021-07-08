const findNextTideExtreme = ({ extremes }) => {
  const timeNow = 1624747238;
  // TODO: use futureTimeNowVariable when converting
  //       from mock data.
  // convert to seconds and remove decimals
  const futureTimeNowVariable = (Date.now()/1000).toFixed(0);

  if (timeNow < extremes[0].timestamp) {
      return extremes[0]
  } else {
    for (let i = 0, len = extremes.length-1; i < len; i++) {
      if (extremes[i].timestamp <= timeNow && timeNow <= extremes[i+1].timestamp) {
        return extremes[i + 1]
      }
    }
    // in case next extreme is tomorrow
    return extremes[extremes.length];
  }
}


export default findNextTideExtreme;
