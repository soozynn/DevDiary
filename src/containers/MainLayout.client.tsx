"use client";

import ThemeBrightness from "@/components/ThemeSwitcher.server";
import { MOBILE_SIZE } from "@/constants";
import Footer from "@/containers/Footer.client";
import Header from "@/containers/Header.client";
import Sidebar from "@/containers/Sidebar.server";
import { ThemeProvider } from "@/contexts/ThemeContext.client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenedSidebar((prevState) => !prevState);
  };

  useEffect(() => {
    const closeSidebar = () => {
      if (window.innerWidth >= MOBILE_SIZE) {
        setIsOpenedSidebar(false);
      }
    };

    window.addEventListener("resize", closeSidebar);

    return () => {
      window.removeEventListener("resize", closeSidebar);
    };
  }, []);

  useEffect(() => {
    setIsOpenedSidebar(false);
  }, [pathname, searchParams]);

  return (
    <ThemeProvider>
      <Header isOpenedSidebar={isOpenedSidebar} toggleSidebar={toggleSidebar} />
      {isOpenedSidebar && (
        <div className="top-[4.375rem] fixed flex w-full h-full left-0 z-20">
          <Sidebar />
        </div>
      )}
      <main>{children}</main>
      <Footer />
      <ThemeBrightness />
    </ThemeProvider>
  );
}
