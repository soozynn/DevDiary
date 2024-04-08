"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher.server";
import { MOBILE_SIZE } from "@/constants";
import Footer from "@/containers/Footer.client";
import Header from "@/containers/Header.client";
import Sidebar from "@/containers/Sidebar.server";
import { ThemeProvider } from "@/contexts/ThemeContext.client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
    if (isOpenedSidebar) {
      document.body.classList.add("overflow-hidden");
      return;
    }

    document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpenedSidebar]);

  useEffect(() => {
    setIsOpenedSidebar(false);
  }, [pathname]);

  return (
    <ThemeProvider>
      <Header isOpenedSidebar={isOpenedSidebar} toggleSidebar={toggleSidebar} />
      {isOpenedSidebar && <Sidebar />}
      <main className="flex-grow overflow-y-auto">{children}</main>
      <Footer />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
