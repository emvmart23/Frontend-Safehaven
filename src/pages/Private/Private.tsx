import { PrivateRoutes } from "@/routes/guards/links"
import { RoutesWithNotFound } from "@/tools"
import { lazy } from "react"
import { Route } from "react-router-dom"
import { Help } from "./help/page/Help"
import HelpReservation from "./help/components/HelpReservation"
import ServiceProblem from "./help/components/ServiceProblem"
import Payment from "./help/components/Payment"

const DetailsUser = lazy(() => import("./profile/pages/DetailsUser"))
const Profile = lazy(() => import("./profile/pages/Profile"))

function Private() {

  return (
    <RoutesWithNotFound>
      <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
      <Route path={PrivateRoutes.DETAILS} element={<DetailsUser />} />
      <Route path={PrivateRoutes.HELP} element={<Help />}>
        <Route path={PrivateRoutes.SERVICE} element={<ServiceProblem />} />
        <Route path={PrivateRoutes.BOOKING} element={<HelpReservation />} />
        <Route path={PrivateRoutes.PAYMENT} element={<Payment />} />
      </Route>
    </RoutesWithNotFound>
  )
}
export default Private