import AppLayout from "@/layouts/AppLayout";
import { TabsTable } from "@/modules/admin/components/TabsTable";
import { Request } from "@/modules/request/pages/Request";
import Services from "@/modules/service/pages/Services";
import Home from "@/pages/Home";


const appRoutes = [
    {
        path: "/",
        element:
          // <ProtectedRoute>
          <AppLayout />,
          // </ProtectedRoute>,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/service",
            element: <Services/>
          },
          {
            path: "/aboutus",
            element: <div>max</div>
          },
          {
            path: "/request",
            element:<Request/> 
          },
          {
            path:"/admin",
            element: <TabsTable/>
          }
        ]
    }   
]

export default appRoutes