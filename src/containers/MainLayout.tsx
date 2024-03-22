"use client";

import ThemeBrightness from "@/components/ThemeBrightness";
import { MOBILE_SIZE } from "@/constants";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import Sidebar from "@/containers/Sidebar";
import { ThemeBrightnessContext } from "@/contexts/ThemeBrightnessContext";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [isBrightTheme, setIsBrightTheme] = useState(false);

  const handleClickSidebarButton = () => {
    setIsOpenedSidebar(!isOpenedSidebar);
  };

  const handleClickBrightThemeButton = () => {
    setIsBrightTheme(!isBrightTheme);
  };

  useEffect(() => {
    const closeSidebar = () => {
      if (window.innerWidth >= MOBILE_SIZE) {
        setIsOpenedSidebar(false);
      }
    };

    window.addEventListener("resize", closeSidebar);

    return () => window.removeEventListener("resize", closeSidebar);
  }, []);

  return (
    <ThemeBrightnessContext.Provider
      value={{ isBrightTheme, handleClickBrightThemeButton }}
    >
      <Header
        isOpenedSidebar={isOpenedSidebar}
        handleClickSidebarButton={handleClickSidebarButton}
      />
      {isOpenedSidebar && (
        <div className="top-[4.375rem] fixed flex w-full h-full left-0 z-20">
          <Sidebar />
        </div>
      )}
      <main>{children}</main>
      <Footer />
      <ThemeBrightness />
    </ThemeBrightnessContext.Provider>
  );
}
