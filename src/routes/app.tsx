import { Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout/index";
import Profile from "@/pages/Private/profile/pages/Profile";
import { PrivateRoutes } from "./guards/links";
import { AuthGuard } from "./guards/AuthGuard";
import { RoutesWithNotFound } from "@/tools";
import Home from "@/pages/Public/home";
import Public from "@/pages/Public/Public";
import Private from "@/pages/Private/Private";

function AppRoutes() {
  return (
    <RoutesWithNotFound>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path={"/*"} element={<Public />} />
        <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
      </Route>
    </RoutesWithNotFound>
  )
}
export default AppRoutes