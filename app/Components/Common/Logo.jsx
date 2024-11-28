import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-3xl font-bold">
      <Image
        width={100}
        height={40}
        src="/assets/lws-kitchen.png"
        className="h-10"
        alt="Logo"
      />
    </Link>
  );
}
