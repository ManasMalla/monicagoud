import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Monica Sree Goud",
  description: "A personal website for Monica Sree Goud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <body className={`${inter.className} bg-[#AD8DC5] text-white`}>
        <nav className="w-screen flex justify-between px-16 py-12 text-xl">
          <p className="font-bold">monica goud</p>
          <ul className="flex gap-x-8">
            <li>
              <a>work</a>
            </li>
            <li>
              <a>about</a>
            </li>
            <li>
              <a>contact</a>
            </li>
          </ul>
          <button className="bg-[#D6A7D0] px-4 py-1 rounded-md text-base font-bold">
            resume
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
