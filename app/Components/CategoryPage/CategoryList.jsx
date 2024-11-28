import CategoryItem from "./CategoryItem";

export default function CategoryList({ categories }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {categories.map((category) => (
        <CategoryItem
          key={categories.id}
          imageUrl={category.image}
          title={category.name}
        />
      ))}
    </div>
  );
}
