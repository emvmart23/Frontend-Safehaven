import NavItem from "./NavItem";
import { ArrowRightLeft } from "lucide-react";
import { MENU_ITEMS } from "../../constans";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip-content";
import { Button } from "../ui/buttom";

interface NavbarProps {
  isExpanded: boolean;
  btnUpdateMenuVisibility: () => void;
}

function Navbar({ isExpanded, btnUpdateMenuVisibility }: NavbarProps) {
  return (
    <>
      <nav className="pt-6">
        {MENU_ITEMS.map((data, index) => (
          <NavItem key={index} {...data} isExpanded={isExpanded} />
        ))}
        <TooltipProvider delayDuration={10}>
          <Tooltip>
            <TooltipTrigger
              asChild
              onClick={btnUpdateMenuVisibility}
              className="absolute top-[40rem] xl:top-[50rem] h-10 -right-[1.7rem]"
            >
              <Button variant="outline" className="z-50">
                <ArrowRightLeft className="w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isExpanded ? <span>Cerrar</span> : <span>Abrir</span>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </>
  );
}

export default Navbar;
