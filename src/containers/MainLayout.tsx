"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { SidebarContext } from "@/contexts/SidebarContext";
import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);

  const handleClickSidebarButton = () => {
    setIsOpenedSidebar(!isOpenedSidebar);
  };

  return (
    <>
      <Header
        isOpenedSidebar={isOpenedSidebar}
        handleClickSidebarButton={handleClickSidebarButton}
      />
      {isOpenedSidebar && (
        <div className="top-[4.375rem] absolute flex w-full h-full left-0 z-20">
          <Sidebar />
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
}
