import recipes from "@/data/recipes.json";
import getPopularRecipesByCategory from "@/utils/getPopularRecipesByCategory";
import Image from "next/image";
import Link from "next/link";

export default function YouMightAlsoLike({ params }) {
  const { category, recipe } = params;

  const popularRecipesByCategory = getPopularRecipesByCategory(
    category,
    recipes
  ).filter((item) => item.title !== decodeURIComponent(recipe));

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {popularRecipesByCategory.slice(0, 4).map((recipe) => (
          <Link
            key={recipe.title}
            href={`/${recipe.category_id}/${recipe.title}`}
          >
            <Image
              width={1000}
              height={1000}
              src={`/assets/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-60 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">{recipe.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
