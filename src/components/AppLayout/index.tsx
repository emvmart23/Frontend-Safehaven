import Sidebar from "@/components/Sidebar";
import { LogoSafehavenExpanded } from "@/components/Icons";
import { UserDropDown, TailwindIndicator } from "@/components/index";
import { Separator } from "@/components/ui/Separator";
import { AlignJustify } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";
import { ProgressBar, Toggle } from "@/common/components/index";
import { Toaster } from "../ui/Toaster";
import { Suspense, lazy } from "react";
import { PrivateRoutes } from "@/routes/guards/links";

const Footer = lazy(() => import("../Footer/index"))

function AppLayout() {
  const { pathname } = useLocation()

  const showFooter = `/privado/${Object.values(PrivateRoutes).find((e) => `/privado/${e}` === pathname || `/privado/ayuda/${e}` === pathname )}`
  
  return (
    <div className="bg-background/95 w-full h-full flex-col min-w-[320px]">
      <nav className="flex bg-background/95 border-b h-16 p-6 lg:hidden">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-5">
            <AlignJustify />
            <LogoSafehavenExpanded className="w-[8rem]" />
          </div>
          <UserDropDown className="rounded-full p-1 w-10 h-10" />
        </div>
      </nav>
      <div
        className={`w-[15rem] h-full fixed top-0 border-r border-foreground/20 shadow-2xl hidden lg:block z-50`}
      >
        <LogoSafehavenExpanded className="w-full h-[5rem] mx-auto p-4" />
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
          relative
        "
      >
        <Suspense fallback={<ProgressBar />}>
          <Outlet />
          {!(showFooter === pathname) ? <Footer /> : null}
          
        </Suspense>
      </div>
      <Toaster />
      <TailwindIndicator />
    </div>
  );
}

export default AppLayout;
