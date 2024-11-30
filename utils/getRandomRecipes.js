export default function getRandomRecipes(recipes, num = 2) {
  // Create a copy of the recipes array to prevent modification of the original array
  const recipesCopy = [...recipes];

  // Result array to store selected recipes
  const selectedRecipes = [];

  // Randomly select 'num' recipes
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * recipesCopy.length);
    selectedRecipes.push(recipesCopy[randomIndex]);

    // Remove the selected recipe from the copy array to avoid selecting the same one again
    recipesCopy.splice(randomIndex, 1);
  }

  return selectedRecipes;
}
