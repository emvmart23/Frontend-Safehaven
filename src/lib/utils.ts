import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Handler LocalStorage functions */

export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

/* Handler Session functions */

export const setSessionStorage = (key:string, value:string) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, value);
  }
}

export const getSessionStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(key);
  }
};

export const removeSessionStorage = (key: string) => {
  if(typeof window !== "undefined") {
    sessionStorage.removeItem(key)
  }
}



/* Handlre cookies functions */

export const setCookie = (key: string, value: string, days: number) => {
  if (typeof window !== "undefined") {
    const date = new Date();
    date.setTime(date.getTime() + days + 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${key}=${value};${expires};path=/`;
  }
};1

export const getCookie = (key: string) => {
  if (typeof window !== "undefined") {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
        2;
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return "";
};

export const removeCookie = (key:string) => {
  if(typeof window !== "undefined") {
    if (typeof window !== "undefined") {
      document.cookie = `${key}=; Max-Age=-99999999;`;
    }
  }
} 
