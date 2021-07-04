const degreeToCompass = degrees => {
  let direction = "";

  if (((348.75 <= degrees) && (degrees <= 360)) || ((0 <= degrees) && (degrees < 11.25))) {
    direction = "N";

  } else if ((11.25 <= degrees) && (degrees < 33.75)) {
    direction = "NNE";

  } else if ((33.75 <= degrees) && (degrees < 56.25)) {
    direction = "NE";

  } else if ((56.25 <= degrees) && (degrees < 78.75)) {
    direction = "ENE";

  } else if ((78.75 <= degrees) && (degrees < 101.25)) {
    direction = "E";

  } else if ((101.25 <= degrees) && (degrees < 123.75)) {
    direction = "ESE";

  } else if ((123.75 <= degrees) && (degrees < 146.25)) {
    direction = "SE";

  } else if ((146.25 <= degrees) && (degrees < 168.75)) {
    direction = "SSE";

  } else if ((168.75 <= degrees) && (degrees < 191.25)) {
    direction = "S";

  } else if ((191.25 <= degrees) && (degrees < 213.75)) {
    direction = "SSW";

  } else if ((213.75 <= degrees) && (degrees < 236.25)) {
    direction = "SW";

  } else if ((236.25 <= degrees) && (degrees < 258.75)) {
    direction = "WSW";

  } else if ((258.75 <= degrees) && (degrees < 281.25)) {
    direction = "W";

  } else if ((281.25 <= degrees) && (degrees < 303.75)) {
    direction = "WNW";

  } else if ((303.75 <= degrees) && (degrees < 326.25)) {
    direction = "NW";

  } else if ((326.25 <= degrees) && (degrees < 348.75)) {
    direction = "NNW";
  }
  return direction;
}

export default degreeToCompass;
