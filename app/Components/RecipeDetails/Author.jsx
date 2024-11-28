import Image from "next/image";

export default function Author() {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <Image
        width={100}
        height={100}
        src="/assets/avater.png"
        alt="Author"
        className="w-8 h-8 rounded-full"
      />
      <span className="text-gray-600">Tricia Albert</span>
      <span className="text-gray-400">|</span>
      <span className="text-gray-600">15 mins</span>
      <span className="text-gray-400">|</span>
      <span className="text-gray-600">12 Nov 2021</span>
    </div>
  );
}
