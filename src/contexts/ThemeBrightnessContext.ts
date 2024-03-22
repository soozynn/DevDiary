"use client"

import { createContext, useContext } from "react";

interface ThemeBrightness {
  isBrightTheme: boolean,
  handleClickBrightThemeButton: () => void,
}

export const ThemeBrightnessContext = createContext<ThemeBrightness | undefined>(undefined);

export default function useThemeBrightnessContext() {
  const context = useContext(ThemeBrightnessContext);

  if (context === undefined) {
    throw new Error("useThemeBrightnessContext must be used within a ThemeBrightnessContext.");
  }

  return context;
}