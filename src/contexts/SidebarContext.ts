"use client"

import { createContext, useContext } from "react";

interface Sidebar {
  isOpenedSidebar: boolean,
  handleClickSidebarButton: () => void,
}

export const SidebarContext = createContext<Sidebar | undefined>(undefined);

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarContext.");
  }

  return context;
}