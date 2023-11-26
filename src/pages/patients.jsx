import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Button, Box, Typography, List, ListItem } from "@mui/material";
import EditPatient from "../components/edit-patient";

const PatientsPage = () => {
  const patient = useLoaderData();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const fieldNames = {
    healthInsurance: "Seguro de salud",
    bloodType: "Tipo de sangre",
    weight: "Peso",
    height: "Altura",
    allergies: "Alergias",
    chronicDiseases: "Enfermedades crónicas",
    currentMedication: "Medicación actual",
    familyHistory: "Historial familiar",
  };

  if (!patient)
    return (
      <Box>
        <Typography>Todavía no has registrado tu información médica</Typography>
        <Box sx={{ padding: 1 }} />
        <Button onClick={() => navigate("new")} variant="contained">
          Registrar
        </Button>
      </Box>
    );

  return (
    <Box>
      {editing ? (
        <EditPatient patient={patient} />
      ) : (
        <>
          <List>
            {Object.entries(patient).map(([key, value]) => {
              if (fieldNames[key]) {
                return (
                  <ListItem key={key}>
                    <Typography variant="body1">
                      <strong>{fieldNames[key]}:</strong> {value}
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

export default PatientsPage;
