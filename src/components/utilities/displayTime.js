export const showHr = timestamp => {
  return (new Date((timestamp)*1000).toLocaleTimeString()).match(new RegExp(/^\d+/i))[0];
};

export const showHrMn = timestamp => {
  return (new Date((timestamp)*1000).toLocaleTimeString()).match(new RegExp(/^\d+:\d+/i))[0];
};

export const showAmPm = timestamp => {
  return (new Date((timestamp)*1000).toLocaleTimeString()).match(new RegExp(/[AMP]+/i))[0];
};

export const showMoDay = timestamp => {
  return (new Date((timestamp)*1000).toLocaleDateString()).match(new RegExp(/^\d+\/\d+/i))[0];
};

export const showMoDayYr = timestamp => {
  return (new Date((timestamp)*1000).toLocaleDateString()).match(new RegExp(/^\d+\/\d+\/\d+/i))[0];
};
