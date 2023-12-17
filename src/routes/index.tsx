import { useRoutes } from "react-router-dom"
import appRoutes from "./app"

function AppRoutes() {
  return useRoutes([...appRoutes])
}

export default AppRoutes