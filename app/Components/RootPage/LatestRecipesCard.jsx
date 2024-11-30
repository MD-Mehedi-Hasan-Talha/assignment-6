import categories from "@/data/categories.json";
import Image from "next/image";
import Link from "next/link";

export default function LatestRecipesCard({ recipe }) {
  const category = categories.find((item) => item.id === recipe.category_id);

  return (
    <Link href={`/${recipe.category_id}/${recipe.title}`}>
      <Image
        width={1000}
        height={1000}
        src={`/assets/thumbs/${recipe.thumbnail}`}
        alt={recipe.title}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
      <p className="text-gray-600">{category.name}</p>
    </Link>
  );
}
