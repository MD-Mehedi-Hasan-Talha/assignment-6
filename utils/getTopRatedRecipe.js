export function getTopRatedRecipesByAverageRating(recipes) {
  return recipes.sort(
    (a, b) => b.rating.average_rating - a.rating.average_rating
  );
}

export function getTopRatedRecipesByRatingCount(recipes) {
  return recipes.sort((a, b) => b.rating.rating_count - a.rating.rating_count);
}
