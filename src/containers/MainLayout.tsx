"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      {children}
      <Footer />
    </>
  );
}
