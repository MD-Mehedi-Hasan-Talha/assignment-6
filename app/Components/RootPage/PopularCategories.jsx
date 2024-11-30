import categories from "@/data/categories.json";
import getPopularCategories from "@/utils/getPopularCategories";
import Link from "next/link";
import PopularCategoriesCard from "./PopularCategoriesCard";

export default function PopularCategories({ recipes }) {
  const popularCategories = getPopularCategories(recipes, categories);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {popularCategories
          .slice(0, 6)
          .map(
            (category) =>
              category && (
                <PopularCategoriesCard key={category.id} category={category} />
              )
          )}
      </div>
    </section>
  );
}
