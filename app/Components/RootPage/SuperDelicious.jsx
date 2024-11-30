import { getTopRatedRecipesByRatingCount } from "@/utils/getTopRatedRecipe";
import SuperDeliciousCard from "./SuperDeliciousCard";

export default function SuperDelicious({ recipes }) {
  const topRatedRecipes = getTopRatedRecipesByRatingCount(recipes);

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {topRatedRecipes.slice(0, 3).map((item) => (
          <SuperDeliciousCard key={item.title} recipe={item} />
        ))}
      </div>
    </section>
  );
}
