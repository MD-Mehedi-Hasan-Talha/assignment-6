import LatestRecipesCard from "./LatestRecipesCard";

export default function LatestRecipes({ recipes }) {
  const sortedRecipes = recipes.sort(
    (a, b) => new Date(b.published_date) - new Date(a.published_date)
  );

  return (
    <section className="mb-16" id="latest">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {sortedRecipes.slice(0, 4).map((recipe) => (
          <LatestRecipesCard key={recipe.title} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
