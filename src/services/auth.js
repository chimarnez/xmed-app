import Cookies from "js-cookie";
export const XMED_AUTH_COOKIE = "xmed-auth";

export const getCookie = () => {
  return Cookies.get(XMED_AUTH_COOKIE);
};

export const removeCookie = () => {
  Cookies.remove(XMED_AUTH_COOKIE);
};

export const setCookie = (token) => {
  Cookies.set(XMED_AUTH_COOKIE, token, { path: "/" });
};

export const getAuthConfig = () => {
  const token = getCookie();
  if (!token) throw new Error("Not Authorized");
  return { headers: { Authorization: `Bearer ${token}` } };
};
