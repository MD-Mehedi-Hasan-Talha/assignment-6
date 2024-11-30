import Link from "next/link";
import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes, category }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {recipes.map((recipe) => (
        <Link key={recipe.title} href={`/${category}/${recipe.title}`}>
          <RecipeItem recipe={recipe} />
        </Link>
      ))}
    </div>
  );
}
