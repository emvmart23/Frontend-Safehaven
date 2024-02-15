import AppLayout from "@/components/AppLayout";
import Home from "@/Pages/Home";
import { Request } from "@/Pages/request/pages/Request";
import Services from "@/Pages/service/pages/Services";



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
            element: <div>Admin</div>
          },
          {
            path: "*",
            element: <div>Not found</div>
          }
        ]
    }   
]

export default appRoutes