"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-theme-change", callback);
  };
}

function readTheme() {
  return window.localStorage.getItem("theme") !== "light";
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeToTheme, readTheme, () => true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    window.localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  return (
    <Button
      variant="outline"
      className="h-10 w-10 shrink-0 rounded-lg !px-0"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
