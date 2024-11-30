import Image from "next/image";

export default function RecipeItem({ recipe }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        src={`/assets/thumbs/${recipe.thumbnail}`}
        alt={recipe.title}
        className="w-full h-48 object-cover"
        width={1000}
        height={1000}
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
      </div>
    </div>
  );
}
