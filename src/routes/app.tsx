import { Request } from "@/Pages/request/pages/Request";
import Home from "@/Pages/Home/index";
import { lazy } from "react";

const Services = lazy(() => import("@/Pages/service/pages/Services"))
const AppLayout = lazy(() => import("@/components/AppLayout/index"))


const appRoutes = [
  {
    path: "/",
    element:
      <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Services />
      },
      {
        path: "/aboutus",
        element: <div>max</div>
      },
      {
        path: "/request",
        element: <Request />
      },
      {
        path: "/admin",
        element: <div>Admin</div>
      }
    ]
  }
]

export default appRoutes