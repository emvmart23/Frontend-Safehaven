import { Hammer, HomeIcon, ServerIcon } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Inicio",
    url: "/",
    icon: <HomeIcon/>,
  },
  {
    name: "Servicios",
    url: "/service",
    icon: <Hammer/>,
  },
  {
    name: "Contactanos",
    url: "/aboutus",
    icon: <ServerIcon/>,
  }
];

export { MENU_ITEMS };
