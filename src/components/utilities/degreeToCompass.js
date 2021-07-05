const degreeToCompass = degrees => {
  const direction =
    (((348.75 <= degrees) && (degrees <= 360)) || ((0 <= degrees) && (degrees < 11.25))) ? "N" :
    ((11.25 <= degrees)  && (degrees < 33.75))  ? "NNE" :
    ((33.75 <= degrees)  && (degrees < 56.25))  ? "NE"  :
    ((56.25 <= degrees)  && (degrees < 78.75))  ? "ENE" :
    ((78.75 <= degrees)  && (degrees < 101.25)) ? "E"   :
    ((101.25 <= degrees) && (degrees < 123.75)) ? "ESE" :
    ((123.75 <= degrees) && (degrees < 146.25)) ? "SE"  :
    ((146.25 <= degrees) && (degrees < 168.75)) ? "SSE" :
    ((168.75 <= degrees) && (degrees < 191.25)) ? "S"   :
    ((191.25 <= degrees) && (degrees < 213.75)) ? "SSW" :
    ((213.75 <= degrees) && (degrees < 236.25)) ? "SW"  :
    ((236.25 <= degrees) && (degrees < 258.75)) ? "WSW" :
    ((258.75 <= degrees) && (degrees < 281.25)) ? "W"   :
    ((281.25 <= degrees) && (degrees < 303.75)) ? "WNW" :
    ((303.75 <= degrees) && (degrees < 326.25)) ? "NW"  :
    ((326.25 <= degrees) && (degrees < 348.75)) ? "NNW" : "";
  return direction;
}

export default degreeToCompass;