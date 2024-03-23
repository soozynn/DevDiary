import { useThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";

export default function Sidebar() {
  const { isBrightTheme } = useThemeContext();

  return (
    <div
      className={`w-full ${isBrightTheme ? "light-theme" : "dark-theme"} p-4 overflow-y-auto`}
    >
      <ul className="flex flex-col gap-6">
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
