import { useState } from "react";
import { updatePatient, createPatient } from "../services/patient";

import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { MEDICAL_INFORMATION } from "../constants/route-names";
import { useNotification } from "../hooks/notification";

const EditPatient = ({ patient, edit = true }) => {
  const navigate = useNavigate();
  const notify = useNotification();

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [weight, setWeight] = useState(patient.weight);
  const [height, setHeight] = useState(patient.height);
  const [allergies, setAllergies] = useState(patient.allergies);
  const [chronicDiseases, setChronicDiseases] = useState(
    patient.chronicDiseases
  );
  const [currentMedication, setCurrentMedication] = useState(
    patient.currentMedication
  );
  const [familyHistory, setFamilyHistory] = useState(patient.familyHistory);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const updatedPatient = {
        weight,
        height,
        allergies,
        chronicDiseases,
        currentMedication,
        familyHistory,
      };
      if (edit) {
        await updatePatient(updatedPatient);
      } else {
        await createPatient(updatedPatient);
      }
      notify(
        `Su información se ha ${edit ? "actualizado" : "creado"} correctamente`,
        "success"
      );
      navigate("/app/redirect", {
        state: { toPath: `/app/${MEDICAL_INFORMATION}` },
      });
      // window.location.reload();
    } catch (error) {
      console.error(error);
      notify("Hubo un problema al validar su información", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="App-header">
        <Typography
          component="h2"
          sx={{
            color: "#26C08B",
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "4rem",
            },
          }}
          variant="h2"
        >
          {edit ? "Editar" : "Registrar"} datos del paciente
        </Typography>
        <Box my={2}>
          <Card>
            <CardContent>
              <form>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Peso en kg"
                      type="text"
                      name="weight"
                      value={weight}
                      onChange={(event) => handleInputChange(event, setWeight)}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Altura en metros"
                      type="text"
                      name="height"
                      value={height}
                      onChange={(event) => handleInputChange(event, setHeight)}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Alergias"
                      type="text"
                      name="allergies"
                      value={allergies}
                      onChange={(event) =>
                        handleInputChange(event, setAllergies)
                      }
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Enfermedades crónicas"
                      type="text"
                      name="chronicDiseases"
                      value={chronicDiseases}
                      onChange={(event) =>
                        handleInputChange(event, setChronicDiseases)
                      }
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Medicamiento actual"
                      type="text"
                      name="currentMedication"
                      value={currentMedication}
                      onChange={(event) =>
                        handleInputChange(event, setCurrentMedication)
                      }
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Antecedentes familiares"
                      type="text"
                      name="familyHistory"
                      value={familyHistory}
                      onChange={(event) =>
                        handleInputChange(event, setFamilyHistory)
                      }
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box sx={{ "& > button": { m: 1 } }}>
                      <LoadingButton
                        size="small"
                        onClick={handleSubmit}
                        loading={loading}
                        variant="outlined"
                        disabled={!loading ? false : true}
                      >
                        {edit ? "Enviar" : "Crear"}
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>
      </header>
    </div>
  );
};

export default EditPatient;
