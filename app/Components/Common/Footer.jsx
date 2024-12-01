import footerInfo from "@/data/footerInfo.json";
import Link from "next/link";
import { Instagram, Twitter, Youtube } from "../Icons/SocalMediaIcons";
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

        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2020 LWS Kitchen - All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-orange-500">
              <Twitter />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-orange-500">
              <Instagram />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-orange-500">
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
