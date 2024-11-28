import categories from "@/data/categories.json";
import CategoryList from "../Components/CategoryPage/CategoryList";

export default function CategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <CategoryList categories={categories} />
    </main>
  );
}
