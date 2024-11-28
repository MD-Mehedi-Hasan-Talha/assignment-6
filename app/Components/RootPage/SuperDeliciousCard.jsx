import Image from "next/image";
import Star from "../Icons/Star";

export default function SuperDeliciousCard() {
  return (
    <div>
      <Image
        width={1000}
        height={1000}
        src="/assets/thumbs/thumb-5.jpg"
        alt="Chicken Meatball with Creamy Cheese"
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">
        Chicken Meatball with Creamy Cheese
      </h3>
      <div className="flex items-center text-yellow-500 mb-2">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-gray-600">30 Minutes</p>
    </div>
  );
}
