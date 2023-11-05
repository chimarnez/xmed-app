import { redirect } from "react-router-dom";
import { getAuthConfig } from "./auth";
import axiosInstance from "./axios";

export async function getPatient() {
  const { data } = await axiosInstance.get("/patients", getAuthConfig());
  return data;
}

export async function loader() {
  try {
    const patient = await getPatient();
    return patient;
  } catch (error) {
    console.log(error);
    return redirect("/app/users");
  }
}
