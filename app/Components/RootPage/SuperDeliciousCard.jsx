import Image from "next/image";
import Link from "next/link";
import Star from "../Icons/Star";

export default function SuperDeliciousCard({ recipe }) {
  return (
    <Link href={`/${recipe.category_id}/${recipe.title}`}>
      <Image
        width={1000}
        height={1000}
        src={`/assets/thumbs/${recipe.thumbnail}`}
        alt={recipe.title}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
      <div className="flex items-center text-yellow-500 mb-2">
        {Array(Math.round(recipe.rating.average_rating))
          .fill(crypto.randomUUID())
          .map((item) => (
            <Star key={item} />
          ))}
      </div>
      <p className="text-gray-600">{recipe.cooking_time}</p>
    </Link>
  );
}
