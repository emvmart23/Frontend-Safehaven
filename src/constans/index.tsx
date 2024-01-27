import { Hammer, HomeIcon, ServerIcon } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Inicio",
    url: "/",
    icon: <HomeIcon className="text-foreground/80"/>,
  },
  {
    name: "Servicios",
    url: "/service",
    icon: <Hammer className="text-foreground/80"/>,
  },
  {
    name: "Contactanos",
    url: "/aboutus",
    icon: <ServerIcon className="text-foreground/80"/>,
  }
];

export { MENU_ITEMS };
