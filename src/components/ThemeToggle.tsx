import { useTheme } from "@/context/theme";
import { Moon, Sun } from "lucide-react";

export function Toggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <Sun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          color={`${theme === "dark" && "white"}`}
          className="mx-auto"
        />
      ) : (
        <Moon
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          color={`${theme === "light" && "black"}`}
          className="mx-auto"
        />
      )}
    </div>
  );
}
