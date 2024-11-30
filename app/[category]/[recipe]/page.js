import Actions from "@/app/Components/RecipeDetails/Actions";
import Author from "@/app/Components/RecipeDetails/Author";
import Blog from "@/app/Components/RecipeDetails/Blog";
import YouMightAlsoLike from "@/app/Components/RecipeDetails/YouMightAlsoLike";
import recipes from "@/data/recipes.json";

export default function RecipePage({ params }) {
  const { recipe } = params;

  const recipeData = recipes.find(
    (item) => item.title === decodeURIComponent(recipe)
  );

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {recipeData?.title}
        </h1>
        <Author recipeData={recipeData} />
        <Actions />
        <Blog recipeData={recipeData} />
      </article>

      <YouMightAlsoLike />
    </main>
  );
}
