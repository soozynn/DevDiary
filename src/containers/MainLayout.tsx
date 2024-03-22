"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { MOBILE_SIZE } from "@/constants";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);

  const handleClickSidebarButton = () => {
    setIsOpenedSidebar(!isOpenedSidebar);
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
    <>
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
    </>
  );
}
