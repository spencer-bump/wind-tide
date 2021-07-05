const uvRating = uvIndex => {
  const rating = ((0 <= uvIndex) && (uvIndex <= 2)) ? "Low" :
      ((3 <= uvIndex) && (uvIndex <= 5)) ? "Moderate" :
      ((6 <= uvIndex) && (uvIndex <= 7)) ? "High" :
      ((8 <= uvIndex) && (uvIndex <= 10)) ? "Very High" :
      (11 <= uvIndex) ? "Extreme" : "";
  return rating;
}

export default uvRating;

//   let rating = "";
//   if ((0 <= rating) && (rating <= 2)) {
//     rating = "low";

//   } else if ((3 <= rating) && (rating <= 5)) {
//     rating = "moderate";

//   } else if ((6 <= rating) && (rating <= 7)) {
//     rating = "high";

//   } else if ((8 <= rating) && (rating <= 10)) {
//     rating = "very high";

//   } else if (11 <= rating) {
//     rating = "extreme";
//   }
//   return rating;
// }
