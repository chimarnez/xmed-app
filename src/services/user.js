import { redirect } from "react-router-dom";
import { getAuthConfig } from "./auth";
import axiosInstance from "./axios";

export async function getUser() {
  const { data } = await axiosInstance.get("/users", getAuthConfig());
  return data;
}

export async function getUserWithRole() {
  const { data } = await axiosInstance.get("/users/role", getAuthConfig());
  return data;
}

export async function updateUser(data) {
  await axiosInstance.patch(`/users`, data, getAuthConfig());
}

export async function loader() {
  try {
    const user = await getUser();
    console.log(user);
    return user;
  } catch (error) {
    return redirect("/login");
  }
}
