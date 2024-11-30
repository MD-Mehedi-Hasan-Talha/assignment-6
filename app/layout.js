import { Inter } from "next/font/google";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LWS Kitchen",
  description: "LWS Kitchen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
