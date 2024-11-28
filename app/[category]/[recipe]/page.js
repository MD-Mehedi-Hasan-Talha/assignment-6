import Actions from "@/app/Components/RecipeDetails/Actions";
import Author from "@/app/Components/RecipeDetails/Author";
import Blog from "@/app/Components/RecipeDetails/Blog";
import YouMightAlsoLike from "@/app/Components/RecipeDetails/YouMightAlsoLike";

export default function RecipePage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          A full guide for a better and smarter cooking
        </h1>
        <Author />
        <Actions />
        <Blog />
      </article>

      <YouMightAlsoLike />
    </main>
  );
}
