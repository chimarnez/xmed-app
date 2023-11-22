/* const DoctorsPage = () => {
  return (
    <div>
      <h2>Work In Progress</h2>
    </div>
  );
};

export default DoctorsPage; */

import { useLoaderData } from "react-router-dom";
import ListObject from "../components/list-object";
import EditDoctor from "../components/edit-doctor";
import { useState } from "react";

const DoctorsPage = () => {
  const doctor = useLoaderData();
  console.log(doctor);
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  return (
    <div>
      {editing ? (
        <EditDoctor doctor={doctor} />
      ) : (
        <>
          <ListObject data={doctor} />
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default DoctorsPage;
