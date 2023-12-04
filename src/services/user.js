import { redirect } from "react-router-dom";
import { getAuthConfig } from "./auth";
import axiosInstance from "./axios";
import { parseFromDateInput } from "../utils/date";

export async function getUser() {
  const { data } = await axiosInstance.get("/users", getAuthConfig());

  if (data.password) {
    delete data.password;
  }
  if (data.id) {
    delete data.id;
  }
  if (data.createdAt) {
    delete data.createdAt;
  }
  if (data.updatedAt) {
    delete data.updatedAt;
  }
  return data;
}

export async function getUserWithRole() {
  const { data } = await axiosInstance.get("/users/role", getAuthConfig());
  return data;
}

export async function updateUser(data) {
  const updatedUser = { ...data };
  if (updatedUser.birthDate) {
    updatedUser.birthDate = parseFromDateInput(updatedUser.birthDate);
  }
  if (!updatedUser.password) delete updatedUser.password;
  await axiosInstance.patch(`/users`, updatedUser, getAuthConfig());
}

export async function loader() {
  try {
    const user = await getUser();
    return user;
  } catch (error) {
    return redirect("/login");
  }
}
