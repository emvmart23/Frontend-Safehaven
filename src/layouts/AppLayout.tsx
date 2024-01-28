import Sidebar from "@/components/NavBar";
import { LogoSafehaven } from "@/components/Icons";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Toggle } from "@/components/ThemeToggle";
import { UserDropDown } from "@/components/UserDropDown";
import { Separator } from "@/components/ui/separator";
import { AlignJustify } from "lucide-react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-background/95 w-full h-full flex-col min-w-[320px]">
      <nav className="flex bg-background/95 border-b h-16 p-6 lg:hidden">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-5">
            <AlignJustify />
            <LogoSafehaven className="w-[8rem]" />
          </div>
          <UserDropDown className="rounded-full p-1 w-10 h-10" />
        </div>
      </nav>
      <div
        className={`w-[15rem] h-full fixed top-0 border-r border-foreground/20 shadow-2xl hidden lg:block`}
      >
        <LogoSafehaven className="w-full h-[5rem] mx-auto p-4" />
        <Sidebar />
        <Separator className="mt-[25rem] w-[80%] mx-auto bg-gray-400" />
        <div className="ml-6 mb-10 mt-8">
          <UserDropDown
            text="Acceder"
            className="flex gap-3 h-9 w-[12rem] p-5 shadow-2xl border border-foreground/20"
          />
        </div>
        <Toggle />
      </div>
      <div
        className="
          pt-3
          pl-[1rem]
          lg:pl-[16rem]
          pr-[1rem]
          min-w-[320px]
        "
      >
        <Outlet />
      </div>
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;
