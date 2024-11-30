import Link from "next/link";
import Search from "../Icons/Search";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="flex justify-between items-center">
        <Logo />
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/#latest" className="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-orange-500">
            <Search />
          </Link>
        </div>
      </nav>
    </header>
  );
}
