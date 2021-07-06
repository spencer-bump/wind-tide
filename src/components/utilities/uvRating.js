const uvRating = uvIndex => {
  const rating = ((0 <= uvIndex) && (uvIndex <= 2)) ? "Low" :
      ((3 <= uvIndex) && (uvIndex <= 5)) ? "Moderate" :
      ((6 <= uvIndex) && (uvIndex <= 7)) ? "High" :
      ((8 <= uvIndex) && (uvIndex <= 10)) ? "Very High" :
      (11 <= uvIndex) ? "Extreme" : "";
  return rating;
}

export default uvRating;
