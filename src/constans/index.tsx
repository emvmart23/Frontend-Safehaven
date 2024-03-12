import { Hammer, HomeIcon, ServerIcon } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Inicio",
    url: "/",
    icon: <HomeIcon/>,
  },
  {
    name: "Servicios",
    url: "/servicio",
    icon: <Hammer/>,
  },
  {
    name: "Contactanos",
    url: "/contacto",
    icon: <ServerIcon/>,
  }
];

export { MENU_ITEMS };
