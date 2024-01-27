import { useTheme } from "@/context/theme";
import { Moon } from "lucide-react";
import { Switch } from "./ui/switch";

export function Toggle() {
  const { theme, setTheme } = useTheme();
  const currentTheme = () => setTheme(theme === "light" ? "dark" : "light")
  return (
    <div className="flex justify-center items-center gap-3 w-[12rem] mx-auto">
      <Moon className="text-foreground/80" />
      <span className="text-foreground/80">Modo oscuro</span>
      <Switch className=" shadow-gray-500" onClick={currentTheme} />
    </div>
  );
}
