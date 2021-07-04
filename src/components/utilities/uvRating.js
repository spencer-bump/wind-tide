const uvRating = uvNumber => {
  let rating = "";
  if ((0 <= rating) && (rating <= 2)) {
    rating = "low";

  } else if ((3 <= rating) && (rating <= 5)) {
    rating = "moderate";

  } else if ((6 <= rating) && (rating <= 7)) {
    rating = "high";

  } else if ((8 <= rating) && (rating <= 10)) {
    rating = "very high";

  } else if (11 <= rating) {
    rating = "extreme";
  }
  return rating;
}

export default uvRating;
