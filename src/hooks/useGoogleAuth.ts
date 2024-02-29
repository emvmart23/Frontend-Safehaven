import { setCookie, setLocalStorage } from "@/tools";
import api from "@/service/api";
import { setTokenResponse, setUser } from "@/store/slices";
import { useAppDispatch } from "@/store/store";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";

/**  
 * This function allows users to authenticate using their Google account
 * @returns {{ googleLogin : Function }} 
 */

function useGoogleAuth() {
  const dispatch = useAppDispatch();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse: TokenResponse) => {
      const { data } = await api.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );
      
      dispatch(setTokenResponse(tokenResponse));
      dispatch(setUser(data));
      // User's data store in browser
      setLocalStorage("user", JSON.stringify(data));
      setCookie("accessToken", tokenResponse.access_token, 1);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return { googleLogin };
}

export default useGoogleAuth;
