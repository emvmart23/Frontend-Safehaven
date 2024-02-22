import { getCookie } from "@/lib/utils";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export function useAuth() {
  const token = getCookie("accessToken");
  const isAutheticated =
    useSelector((state: RootState) => state.auth.isAuthenticated) && token;
  const { user } = useSelector((state: RootState) => state.auth);
  return { isAutheticated, user };
}
