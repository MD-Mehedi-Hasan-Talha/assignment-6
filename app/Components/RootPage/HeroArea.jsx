import getRandomRecipes from "@/utils/getRandomRecipes";
import { getTopRatedRecipesByAverageRating } from "@/utils/getTopRatedRecipe";
import sliceStringByWords from "@/utils/sliceStringByWords";
import Image from "next/image";
import Link from "next/link";

export default function HeroArea({ recipes }) {
  const topRatedRecipes = getTopRatedRecipesByAverageRating(recipes);

  const randomRecipe = getRandomRecipes(topRatedRecipes, 1)[0];

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/assets/thumbs/${randomRecipe.thumbnail}`}
            alt="Mighty Super Cheesecake"
            className="w-full h-[450px] object-cover rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{randomRecipe.title}</h1>
          <p className="text-gray-600 mb-4">
            {sliceStringByWords(randomRecipe.description)}
          </p>
          <Link
            href={`/${randomRecipe.category_id}/${randomRecipe.title}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
