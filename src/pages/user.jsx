import { useLoaderData } from "react-router-dom";
import ListObject from "../components/list-object";
import EditUser from "../components/edit-user";
import { useState } from "react";

const UserPage = () => {
  const user = useLoaderData();
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  return (
    <div>
    {editing ? (
      <EditUser user={user} />
    ) : (
      <>
        <ListObject data={user} />
        <button onClick={handleEditClick}>Edit</button>
      </>
    )}
    </div>
  );
};

export default UserPage;
