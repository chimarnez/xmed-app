import { useLoaderData } from "react-router-dom";
import { Button, Box, Typography, List, ListItem } from "@mui/material";
import EditUser from "../components/edit-user";
import { formatDate } from "../utils/date";
import { useState } from "react";

const fieldNames = {
  firstName: "Nombre",
  lastName: "Apellido",
  birthDate: "Fecha de nacimiento",
  gender: "Género",
  phone: "Teléfono",
  address: "Dirección",
  email: "Correo electrónico",
};

const UserPage = () => {
  const user = useLoaderData();
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };
  return (
    <Box>
      {editing ? (
        <EditUser user={user} />
      ) : (
        <>
          <Typography component="h2" sx={{
            color:"#26C08B",
            fontSize: {
                xs: "2rem",
                sm: "2rem",  
                md: "2.5rem",
                lg: "3rem", 
                xl: "4rem"  
            }
          }} variant="h2">
              Usuario
          </Typography>
          <List>
            {Object.entries(user).map(([key, value]) => {
              if (fieldNames[key]) {
                let displayValue = value;
                if (key === "birthDate") {
                  displayValue = formatDate(value); // Formatea la fecha de nacimiento antes de mostrarla
                }
                return (
                  <ListItem key={key}>
                    <Typography variant="body1">
                      <strong>{fieldNames[key]}:</strong> {displayValue}
                    </Typography>
                  </ListItem>
                );
              }
              return null;
            })}
          </List>
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            Editar
          </Button>
        </>
      )}
    </Box>
  );
};

export default UserPage;
