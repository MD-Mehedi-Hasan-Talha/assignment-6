import footerInfo from "@/data/footerInfo.json";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {footerInfo &&
            footerInfo.map((info, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{info.heading}</h4>
                <ul className="space-y-2">
                  {info.options.map((option, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-orange-500"
                      >
                        {option}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
}
