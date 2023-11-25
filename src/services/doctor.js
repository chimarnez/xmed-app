import { redirect } from "react-router-dom";
import { getAuthConfig } from "./auth";
import axiosInstance from "./axios";

export async function getDoctor() {
  const { data } = await axiosInstance.get("/doctors", getAuthConfig());
  return data;
}

export async function getDoctors() {
  const { data } = await axiosInstance.get("/doctors/search", getAuthConfig());
  return data;
}

export async function updateDoctor(data) {
  await axiosInstance.patch(`/doctors`, data, getAuthConfig());
}

export async function getDoctorProfile({ params }) {
  const { id } = params;
  try {
    const { data } = await axiosInstance.get(`/doctors/${id}`, getAuthConfig());
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function loader() {
  try {
    const doctors = await getDoctors();
    return doctors;
  } catch (error) {
    console.log(error);
    return redirect("/app/users");
  }
}
