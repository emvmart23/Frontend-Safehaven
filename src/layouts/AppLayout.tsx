import Sidebar from "@/components/NavBar";
import { Toggle } from "@/components/ThemeToggle";
import {
  UserDropDown,
  ButtonAccess,
  AvatarAccess,
} from "@/components/UserDropDown";
import { LogoSafehaven } from "@/components/icons";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, Moon } from "lucide-react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-background w-full h-screen flex-col min-w-[320px]">
      {/* NavbarResponsive */}
      <div className="h-16 flex items-center justify-end p-6 lg:hidden bg-background border-b">
        <div className="flex gap-16 justify-between w-full items-center">
          <AlignJustify />
          <LogoSafehaven />
          <div className="relative right-[6rem]">
            <UserDropDown>
              <AvatarAccess />
            </UserDropDown>
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`w-[15rem] duration-200 bg-background h-screen absolute top-0 border-r shadow-2xl hidden lg:block`}
      >
        <div className="mx-auto pt-4 pl-6">
          <Moon className="h-16 w-[9.9rem] origin-left duration-200 scale-110" />
        </div>
        <div className="">
          <Sidebar />
        </div>
        <div className="mt-[25rem]">
          <Separator className="w-[80%] mx-auto bg-gray-400" />
          <div className="flex justify-center mb-10 mt-8">
            <UserDropDown>
              <ButtonAccess />
            </UserDropDown>
          </div>
          <Toggle />
        </div>
      </div>
      <div
        className="
          pt-3
          pl-[1rem]
          lg:pl-[16rem]
          pr-[1rem]
          h-screen
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
