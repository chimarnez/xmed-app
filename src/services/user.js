import { redirect } from "react-router-dom";
import { getAuthConfig } from "./auth";
import axiosInstance from "./axios";

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
