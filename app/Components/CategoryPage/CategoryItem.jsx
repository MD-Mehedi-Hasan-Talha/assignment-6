import Link from "next/link";

export default function CategoryItem({ imageUrl, title }) {
  return (
    <Link href={`/${title}`}>
      <div className="text-center">
        <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
          <img
            src={`/assets${imageUrl}`}
            alt={title}
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </Link>
  );
}
