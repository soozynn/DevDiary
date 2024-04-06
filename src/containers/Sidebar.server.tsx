import { useThemeContext } from "@/contexts/ThemeContext.client";
import Link from "next/link";

export default function Sidebar() {
  const { isBrightTheme } = useThemeContext();

  return (
    <div
      className={`${isBrightTheme ? "light-theme" : "dark-theme"} fixed left-0 top-[4.375rem] z-50 h-[calc(100vh-4.375rem)] w-full overflow-y-auto`}
    >
      <ul className="flex flex-col gap-6 p-4">
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
  );
}
