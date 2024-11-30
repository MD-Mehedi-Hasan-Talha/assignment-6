import Image from "next/image";
import Link from "next/link";

export default function CategoryItem({ category }) {
  return (
    <Link href={`/${category.id}`}>
      <div className="text-center">
        <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
          <Image
            width={100}
            height={100}
            src={`/assets${category.image}`}
            alt={category.name}
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <h2 className="text-xl font-semibold">{category.name}</h2>
      </div>
    </Link>
  );
}
