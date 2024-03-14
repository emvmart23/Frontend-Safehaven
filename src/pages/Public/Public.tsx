import { PublicRoutes } from "@/routes/guards/links"
import { RoutesWithNotFound } from "@/tools"
import { lazy } from "react"
import { Route } from "react-router-dom"

const Service = lazy(() => import("./service/pages/Services"))
const AboutUs = lazy(() => import("./aboutus/pages/AboutUs"))

function Public() {
  return (
    <RoutesWithNotFound>
        <Route path={PublicRoutes.SERVICE} element={<Service/>}/>
        <Route path={PublicRoutes.CONTACT} element={<AboutUs/>}/>
    </RoutesWithNotFound>
  )
}
export default Public