export const degreeToCompassDescription = (degrees) => {
  const description =
    (((348.75 <= degrees) && (degrees <= 360)) || ((0 <= degrees) && (degrees < 11.25))) ? "North" :
    ((11.25 <= degrees)  && (degrees < 33.75))  ? "North Northeast" :
    ((33.75 <= degrees)  && (degrees < 56.25))  ? "Norteast"  :
    ((56.25 <= degrees)  && (degrees < 78.75))  ? "East Northeast" :
    ((78.75 <= degrees)  && (degrees < 101.25)) ? "East"   :
    ((101.25 <= degrees) && (degrees < 123.75)) ? "East SouthEast" :
    ((123.75 <= degrees) && (degrees < 146.25)) ? "Southeast"  :
    ((146.25 <= degrees) && (degrees < 168.75)) ? "South SouthEast" :
    ((168.75 <= degrees) && (degrees < 191.25)) ? "South"   :
    ((191.25 <= degrees) && (degrees < 213.75)) ? "South Southwest" :
    ((213.75 <= degrees) && (degrees < 236.25)) ? "Southwest"  :
    ((236.25 <= degrees) && (degrees < 258.75)) ? "West Southwest" :
    ((258.75 <= degrees) && (degrees < 281.25)) ? "West"   :
    ((281.25 <= degrees) && (degrees < 303.75)) ? "West Northwest" :
    ((303.75 <= degrees) && (degrees < 326.25)) ? "Northwest"  :
    ((326.25 <= degrees) && (degrees < 348.75)) ? "North Northwest" : "";
  return description;
}


export default degreeToCompassDescription;