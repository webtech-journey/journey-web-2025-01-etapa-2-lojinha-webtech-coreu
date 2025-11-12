"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

export default function ThemeProvider({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme || "light");

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      setCookie("theme", newTheme);
    }
  };

  // Detecta preferência do sistema apenas se não há tema padrão (primeiro acesso)
  useEffect(() => {
    if (!defaultTheme && typeof window !== "undefined") {
      const systemPrefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        updateTheme("dark");
      }
    }
  }, [defaultTheme]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
