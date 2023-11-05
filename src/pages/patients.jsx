import { useLoaderData } from "react-router-dom";
import ListObject from "../components/list-object";

const PatientsPage = () => {
  const patient = useLoaderData();
  return (
    <div>
      <ListObject data={patient} />
    </div>
  );
};

export default PatientsPage;
