import RecipeList from "@/app/Components/RecipePage/RecipeList";
import categories from "@/data/categories.json";
import recipes from "@/data/recipes.json";

export default function CategoryPage({ params }) {
  const { category } = params;

  const filteredRecipes = recipes.filter(
    (item) => item.category_id === category
  );

  const categoryName = categories.find((item) => item.id === category)?.name;

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {categoryName}{" "}
            <span className="text-gray-500 text-2xl font-normal">
              ({filteredRecipes.length > 0 ? filteredRecipes.length : 0}{" "}
              Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <RecipeList recipes={filteredRecipes} category={category} />
    </main>
  );
}
