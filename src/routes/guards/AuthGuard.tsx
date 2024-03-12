import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "./links"

export const AuthGuard = () => {
    const { user } = useSelector((store: RootState) => store.auth)
    return user?.name ? <Outlet/> : <Navigate replace to={PublicRoutes.HOME}/>
}