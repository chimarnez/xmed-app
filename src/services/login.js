import { removeToken, setToken } from "./auth";
import axiosInstance from "./axios";
import { redirect } from "react-router-dom";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);
  // TODO: validate data
  try {
    const { data } = await axiosInstance.post("/auth", userData);
    const token = data.token;
    setToken(token);
    return redirect("/app/users");
  } catch (error) {
    return redirect("/");
  }
}

export function logout() {
  removeToken();
}
