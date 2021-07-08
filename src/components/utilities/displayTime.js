
const regexTime = timestamp => {
  return (new Date((timestamp)*1000).toLocaleTimeString()).match(new RegExp(/^(\d+):\d+/i));
}

const regexAmPm = timestamp => {
  return (new Date((timestamp)*1000).toLocaleTimeString()).match(new RegExp(/([AP])[M]+/i));
};

const regexDate = timestamp => {
  return (new Date((timestamp)*1000).toLocaleDateString()).match(new RegExp(/^(\d+\/(\d+))\/[\d][\d]([\d][\d+])/i));
};

// TIMES
export const showHrMn = timestamp => {
  return regexTime(timestamp)[0];
};
export const showHr = timestamp => {
  return regexTime(timestamp)[1];
};

// AM PM
export const showAmPm = timestamp => {
  return regexAmPm(timestamp)[0];
};

export const showAP = timestamp => {
  return regexAmPm(timestamp)[1];
};

// DATES
export const showMoDayYr = timestamp => {
  return regexDate(timestamp)[0];
};
export const showMoDay = timestamp => {
  return regexDate(timestamp)[1];
};
export const showDay = timestamp => {
  return regexDate(timestamp)[2];
};

