"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

/** True once mounted on the client; false during SSR/hydration. */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

type ThemeToggleProps = {
  /** Render at a smaller size, e.g. inside a shrunk sticky header. */
  compact?: boolean;
};

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";
  const iconClassName = compact ? "size-3.5" : "size-4";

  return (
    <Button
      type="button"
      variant="ghost"
      size={compact ? "icon-sm" : "icon"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-foreground transition-[width,height] duration-300 ease-out hover:bg-accent"
    >
      {mounted ? (
        isDark ? (
          <Sun className={iconClassName} />
        ) : (
          <Moon className={iconClassName} />
        )
      ) : (
        <span className={iconClassName} />
      )}
    </Button>
  );
}
