import {
  getCookie,
  getLocalStorage,
  getSessionStorage,
  removeCookie,
  removeLocalStorage,
  removeSessionStorage,
  setCookie,
  setLocalStorage,
  setSessionStorage,
} from "@/tools";
import { User } from "@/types/user";
import { TokenResponse } from "@react-oauth/google";
import { createSlice } from "@reduxjs/toolkit";

interface Auth {
  user: User | null;
  isAuthenticated: boolean;
  tokenResponse: TokenResponse | null;
}

const initialState: Auth = {
  isAuthenticated:
    (getLocalStorage("isAuthenticated") ||
      getSessionStorage("AisAuthenticated")) === "true" &&
    getCookie("accesstoken")
      ? true
      : false,
  user:
    JSON.parse(getLocalStorage("user") as string) ||
    JSON.parse(getSessionStorage("user") as string) ||
    null,
  tokenResponse: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;

      if (!action.payload.remember) {
        setSessionStorage("isAuthenticated", "true");
        setSessionStorage("user", JSON.stringify(action.payload.user));
      }

      if (action.payload.remember) {
        setLocalStorage("isAuthenticated", "true");
        setLocalStorage("user", JSON.stringify(action.payload.user));
      }

      setCookie("accessToken", action.payload.access, 1);
      setCookie("refreshToken", action.payload.refresh, 1);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      removeSessionStorage("isAuthenticated");
      removeSessionStorage("user");

      removeCookie("isAuthenticated");
      removeCookie("refreshToken");

      removeLocalStorage("isAuthenticated");
      removeLocalStorage("user");
    },
    setTokenResponse: (state, action) => {
      state.tokenResponse = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setTokenResponse, setUser } = authSlice.actions;
