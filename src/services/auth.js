export const XMED_AUTH_KEY = "xmed-auth";

export const getToken = () => {
  return localStorage.getItem(XMED_AUTH_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(XMED_AUTH_KEY);
};

export const setToken = (token) => {
  localStorage.setItem(XMED_AUTH_KEY, token);
};

export const getAuthConfig = () => {
  const token = getToken();
  if (!token) throw new Error("Not Authorized");
  return { headers: { Authorization: `Bearer ${token}` } };
};
