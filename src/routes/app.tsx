import AppLayout from "@/layouts/AppLayout";
import { TabsTable } from "@/modules/admin/components/TabsTable";
import { ProfileForm } from "@/modules/request/Request";
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
            path: "/employees",
            element: <div>Trabajadores</div>
          },
          {
            path: "/service",
            element: <Services/>
          },
          {
            path: "/aboutus",
            element: <ProfileForm/>
          },
          {
            path: "/request",
            element:<ProfileForm/> 
          },
          {
            path:"/admin",
            element: <TabsTable/>
          }
        ]
    }   
]

export default appRoutes