"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextType {
  isBrightTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isBrightTheme, setIsBrightTheme] = useState(false);

  const toggleTheme = () => {
    setIsBrightTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isBrightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider.");
  }

  return context;
}
