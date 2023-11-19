import { useLoaderData } from "react-router-dom";
import ListObject from "../components/list-object";
import EditPatient from "../components/edit-patient";
import { useState } from "react";

const PatientsPage = () => {
  const patient = useLoaderData();
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };



  return (
    <div>
      {editing ? (
        <EditPatient patient={patient} />
      ) : (
        <>
          <ListObject data={patient} />
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PatientsPage;
