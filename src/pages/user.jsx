import { useLoaderData } from "react-router-dom";
import { Box } from "@mui/material";
import EditUser from "../components/edit-user";
import { useState } from "react";
import UserProfile from "../components/user-profile";

const UserPage = () => {
  const user = useLoaderData();
  console.log(user);
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };
  return editing ? (
    <Box>
      <EditUser user={user} />
    </Box>
  ) : (
    <UserProfile onEdit={handleEditClick} user={user} />
  );
};

export default UserPage;
