import { redirect } from "react-router-dom";
import { getAuthConfig } from "./auth";
import axiosInstance from "./axios";

export async function getRecords() {
  const { data } = await axiosInstance.get(
    "/records/patients",
    getAuthConfig()
  );
  return data;
}

export async function loader() {
  try {
    const records = await getRecords();
    return records;
  } catch (error) {
    console.log(error);
    return redirect("/app/users");
  }
}
