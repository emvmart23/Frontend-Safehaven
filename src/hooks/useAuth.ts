import { getCookie } from "@/tools";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

/**  
 * This function verifies if user is logged in or not
 * @returns { isAutheticated }
 * @return { user }
 */

function useAuth() {
  const token = getCookie("accessToken");
  const isAutheticated = useSelector((state: RootState) => state.auth.isAuthenticated) && token;
  const { user } = useSelector((state: RootState) => state.auth);
  return { isAutheticated, user };
}

export default useAuth;