import { useLoaderData } from "react-router-dom";

const DoctorsDetailPage = () => {
  const doctor = useLoaderData();
  console.log(doctor);
};

export default DoctorsDetailPage;
