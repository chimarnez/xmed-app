import { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { createRecord } from "../services/records"; // Falta servicio para crear expediente
const CreateRecord = () => {
  const [loading, setLoading] = useState(false);
  const [recordDetails, setRecordDetails] = useState({
    symptoms: "",
    diagnosis: "",
    treatment: "",
    issuedOn: "",
    PatientId: "", // El Doctor debe introducir el ID del paciente
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await createRecord(recordDetails);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setRecordDetails({
      ...recordDetails,
      [field]: value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography component="h2" variant="h2">
          Creación de Expediente
        </Typography>
        <Box my={2}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container direction="row" spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      label="ID del paciente"
                      type="number"
                      name="PatientId"
                      value={recordDetails.PatientId}
                      onChange={(e) => handleInputChange(e, "PatientId")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Síntomas"
                      type="text"
                      name="symptoms"
                      value={recordDetails.symptoms}
                      onChange={(e) => handleInputChange(e, "symptoms")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Diagnóstico"
                      type="text"
                      name="diagnosis"
                      value={recordDetails.diagnosis}
                      onChange={(e) => handleInputChange(e, "diagnosis")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Tratamiento"
                      type="text"
                      name="treatment"
                      value={recordDetails.treatment}
                      onChange={(e) => handleInputChange(e, "treatment")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Fecha"
                      type="date"
                      name="issuedOn"
                      value={recordDetails.issuedOn}
                      onChange={(e) => handleInputChange(e, "issuedOn")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ "& > button": { m: 1 } }}>
                      <LoadingButton
                        type="submit"
                        size="small"
                        loading={loading}
                        variant="outlined"
                        disabled={!loading ? false : true}
                      >
                        Enviar
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

export default CreateRecord;
