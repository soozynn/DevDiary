"use client";

import SelfieImage from "../../public/selfie.png";
import { useThemeContext } from "@/contexts/ThemeContext.client";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  isOpenedSidebar,
  toggleSidebar,
}: {
  isOpenedSidebar: boolean;
  toggleSidebar: () => void;
}) {
  const { isBrightTheme } = useThemeContext();

  return (
    <header
      className={`${isBrightTheme ? "light-theme border-b border-b-gray-200" : "dark-theme"} sticky left-0 right-0 top-0 z-10 flex flex-shrink-0 items-center p-5`}
    >
      <nav className="flex w-full justify-between">
        <Link href="/" className="flex gap-2">
          <Image
            src={SelfieImage}
            alt="A photo of soozynn"
            width={30}
            height={30}
            priority={true}
            className="rounded-full"
            quality={95}
          />
          <span>soozynn.dev</span>
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-5">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center md:hidden" onClick={toggleSidebar}>
          {isOpenedSidebar ? (
            <button className="relative flex h-6 w-6 items-center justify-center focus:outline-none">
              <span
                className={`absolute block h-0.5 w-5 ${isBrightTheme ? "dark-theme" : "light-theme"} transition-transform duration-300 ${isOpenedSidebar ? "rotate-45 transform" : ""}`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 ${isBrightTheme ? "dark-theme" : "light-theme"} transition-transform duration-300 ${isOpenedSidebar ? "-rotate-45 transform" : "mt-1"}`}
              ></span>
            </button>
          ) : (
            <button className="relative flex h-6 w-6 items-center justify-center focus:outline-none">
              <span
                className={`absolute block h-0.5 w-5 ${isBrightTheme ? "dark-theme" : "light-theme"} transform transition duration-300 ${isOpenedSidebar ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 ${isBrightTheme ? "dark-theme" : "light-theme"} transform transition duration-300 ${isOpenedSidebar ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 ${isBrightTheme ? "dark-theme" : "light-theme"} transform transition duration-300 ${isOpenedSidebar ? "opacity-0" : "opacity-100"}`}
              ></span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
