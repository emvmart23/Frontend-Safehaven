import { Hammer, HomeIcon, ServerIcon } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Inicio",
    url: "/",
    icon: <HomeIcon className="text-foreground"/>,
  },
  {
    name: "Servicios",
    url: "/service",
    icon: <Hammer className="text-foreground"/>,
  },
  {
    name: "Contactanos",
    url: "/aboutus",
    icon: <ServerIcon className="text-foreground"/>,
  }
];

export { MENU_ITEMS };
