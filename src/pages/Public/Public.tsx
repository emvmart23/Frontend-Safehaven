import { PublicRoutes } from "@/routes/guards/links"
import { RoutesWithNotFound } from "@/tools"
import { lazy } from "react"
import { Route } from "react-router-dom"

const Service = lazy(() => import("./service/pages/Services"))

function Public() {
  return (
    <RoutesWithNotFound>
        <Route path={PublicRoutes.SERVICE} element={<Service/>}/>
        <Route path={PublicRoutes.CONTACT} element={<Service/>}/>
    </RoutesWithNotFound>
  )
}
export default Public