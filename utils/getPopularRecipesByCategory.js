export default function getPopularRecipesByCategory(categoryId, recipes) {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category_id === categoryId
  );

  const sortedRecipes = filteredRecipes.sort(
    (a, b) => b.rating.average_rating - a.rating.average_rating
  );

  return sortedRecipes;
}
