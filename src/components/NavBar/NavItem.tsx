import { NavLink, useLocation } from "react-router-dom";

interface Props {
  name?: string;
  url: string;
  icon: any;
}

function NavItem({ name, url, icon }: Props) {
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <NavLink
      to={url}
      className="group flex relative w-[12rem] ml-4 h-[3.8rem] mx-auto z-50"
    >
      <div
        className={`${
          isActive && "bg-primary text-foreground/90"
        } p-2 w-full group-hover:bg-primary group-hover:text-muted rounded transition-all duration-75 origin-left mt-5 flex gap-5`}
      >
        <span>{icon}</span>
        <span className="origin-left text-foreground/80">{name}</span>
      </div>
    </NavLink>
  );
}

export default NavItem;
