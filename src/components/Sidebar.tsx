"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <main className="md:hidden w-full bg-black border-r fixed text-white overflow-y-auto left-0 inset-y-0 z-20">
      <nav className="">
        <ul>
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
      </nav>
    </main>
  );
}
