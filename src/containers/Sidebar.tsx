"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface SidebarProps {
  handleClickSidebar: () => void;
}

export default function Sidebar({ handleClickSidebar }: SidebarProps) {
  useEffect(() => {
    function handleCloseSidebarOnResize() {
      const viewportWidth = window.innerWidth;

      if (viewportWidth > 768) {
        handleClickSidebar();
      }
    }

    window.addEventListener("resize", handleCloseSidebarOnResize);

    return () => {
      window.removeEventListener("resize", handleCloseSidebarOnResize);
    };
  }, []);

  return (
    <aside className="md:hidden w-1/3 bg-black border-r fixed text-white overflow-y-auto right-0 inset-y-0 z-20">
      <button
        className="absolute top-2 right-2 text-white"
        onClick={() => handleClickSidebar()}
      >
        X
      </button>
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
    </aside>
  );
}
