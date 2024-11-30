export default function getPopularCategories(recipes, categories) {
  // Count recipes per category
  const categoryCounts = recipes.reduce((counts, recipe) => {
    counts[recipe.category_id] = (counts[recipe.category_id] || 0) + 1;
    return counts;
  }, {});

  // Sort categories by recipe count in descending order
  const sortedCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1]) // Sort by count
    .map(([categoryId]) =>
      categories.find((category) => category.id === categoryId)
    );

  return sortedCategories;
}
