import { formatDate } from "@/utils/formatData";
import Image from "next/image";

export default function Author({ recipeData }) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <Image
        width={100}
        height={100}
        src="/assets/avater.png"
        alt="Author"
        className="w-8 h-8 rounded-full"
      />
      <span className="text-gray-600">{recipeData.author}</span>
      <span className="text-gray-400">|</span>
      <span className="text-gray-600">{recipeData.cooking_time}</span>
      <span className="text-gray-400">|</span>
      <span className="text-gray-600">
        {formatDate(recipeData.published_date)}
      </span>
    </div>
  );
}
