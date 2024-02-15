import NavItem from "./NavItem";
import { MENU_ITEMS } from "../../constans";

function Sidebar() {
  return (
    <nav className="pt-6">
      {MENU_ITEMS.map((data, index) => (
        <NavItem key={index} {...data} />
      ))}
    </nav>
  );
}

export default Sidebar;
