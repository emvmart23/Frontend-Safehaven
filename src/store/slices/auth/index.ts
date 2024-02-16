import { getCookie, getLocalStorage, getSessionStorage, removeCookie, removeSessionStorage, setCookie, setSessionStorage } from "@/lib/utils";
import { User } from "@/types/auth";
import { createSlice } from "@reduxjs/toolkit";

interface Auth {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState : Auth = {
    isAuthenticated:
     getSessionStorage("isAuthenticated") === "true" && getCookie("accesstoken") ? true : false,
    user:JSON.parse(getSessionStorage("user") as string) || null
};

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login:(state, action) =>{
            state.isAuthenticated = true
            state.user = action.payload.user
            setSessionStorage("isAuthenticated", "true")
            setSessionStorage("user", JSON.stringify(action.payload.user))
            setCookie("accessToken", action.payload.access, 1)
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            removeSessionStorage("isAuthenticated")
            removeSessionStorage("user")
            removeCookie("isAuthenticated")
        }
    }
})

export const { login, logout } = authSlice.actions;
