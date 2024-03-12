import { PrivateRoutes } from "@/routes/guards/links"
import { RoutesWithNotFound } from "@/tools"
import { lazy } from "react"
import { Route } from "react-router-dom"

const DetailsUser = lazy(() => import("./profile/pages/DetailsUser"))
const Profile = lazy(() => import("./profile/pages/Profile"))

function Private() {
  return (
    <RoutesWithNotFound>
        <Route path={PrivateRoutes.PROFILE} element={<Profile/>}/>
        <Route path={PrivateRoutes.DETAILS} element={<DetailsUser/>}/>
    </RoutesWithNotFound>
  )
}
export default Private