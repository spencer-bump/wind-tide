const degreeToCompass = degrees => {

  if (((348.75 <= degrees) && (degrees <= 360)) || ((0 <= degrees) && (degrees < 11.25))) {
    return "N";

  } else if ((11.25 <= degrees) && (degrees < 33.75)) {
    return "NNE";

  } else if ((33.75 <= degrees) && (degrees < 56.25)) {
    return "NE";

  } else if ((56.25 <= degrees) && (degrees < 78.75)) {
    return "ENE";

  } else if ((78.75 <= degrees) && (degrees < 101.25)) {
    return "E";

  } else if ((101.25 <= degrees) && (degrees < 123.75)) {
    return "ESE";

  } else if ((123.75 <= degrees) && (degrees < 146.25)) {
    return "SE";

  } else if ((146.25 <= degrees) && (degrees < 168.75)) {
    return "SSE";

  } else if ((168.75 <= degrees) && (degrees < 191.25)) {
    return "S";

  } else if ((191.25 <= degrees) && (degrees < 213.75)) {
    return "SSW";

  } else if ((213.75 <= degrees) && (degrees < 236.25)) {
    return "SW";

  } else if ((236.25 <= degrees) && (degrees < 258.75)) {
    return "WSW";

  } else if ((258.75 <= degrees) && (degrees < 281.25)) {
    return "W";

  } else if ((281.25 <= degrees) && (degrees < 303.75)) {
    return "WNW";

  } else if ((303.75 <= degrees) && (degrees < 326.25)) {
    return "NW";

  } else if ((326.25 <= degrees) && (degrees < 348.75)) {
    return "NNW";
  } else {
    return null;
  }
}

export default degreeToCompass;
