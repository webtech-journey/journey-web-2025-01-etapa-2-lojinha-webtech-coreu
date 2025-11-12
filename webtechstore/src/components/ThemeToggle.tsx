"use client";

import React from "react";
import { Moon, Sun } from "phosphor-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-theme-bg rounded-md text-theme dark:bg-theme-bg dark:text-yellow">
    <button
      aria-label="Alternar tema"
      onClick={toggle}
      className="flex items-center gap-2 px-2 py-2 cursor-pointer rounded-md hover:bg-background/5"
      title={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
      <span className="sr-only">Alternar tema</span>
    </button>
    </div>
  );
}
