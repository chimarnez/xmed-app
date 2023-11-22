import { redirect } from "react-router-dom";
import { getAuthConfig } from "./auth";
import axiosInstance from "./axios";

export async function getDoctor() {
  const { data } = await axiosInstance.get("/doctors", getAuthConfig());
  return data;
}

export async function updateDoctor(data) {
  await axiosInstance.patch(`/doctors`, data, getAuthConfig());
}

export async function loader() {
  try {
    const doctor = await getDoctor();
    return doctor;
  } catch (error) {
    console.log(error);
    return redirect("/app/users");
  }
}