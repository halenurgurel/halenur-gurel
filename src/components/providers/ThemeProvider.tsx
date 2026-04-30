"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme | "system") => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(resolved: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme | "system">(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme | "system") ?? "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = (localStorage.getItem("theme") as Theme | "system") ?? "system";
    return stored === "system" ? getSystemTheme() : stored;
  });

  // Sync DOM class whenever resolved theme changes (also fires on mount)
  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  // Listen for OS-level theme changes (only when preference is "system")
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") setResolvedTheme(getSystemTheme());
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = (next: Theme | "system") => {
    const resolved = next === "system" ? getSystemTheme() : next;
    setThemeState(next);
    setResolvedTheme(resolved);
    localStorage.setItem("theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
