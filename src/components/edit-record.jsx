import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { getRecord, updateRecord } from "../services/records";

const EditRecord = () => {
  const [loading, setLoading] = useState(false);
  const [recordDetails, setRecordDetails] = useState({
    symptoms: "",
    diagnosis: "",
    treatment: "",
    issuedOn: "",
    PatientId: "", // El Dr debe introducir el ID del paciente
  });

  const [patientName, setPatientName] = useState(""); 

  useEffect(() => {
    async function fetchRecord() {
      try {
        const record = await getRecord(8); //ID del record hardcodeado, supongo que debe cambiar dependiendo que cuál expediente se seleccione
        setRecordDetails(record);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecord();
  }, []);

  
  const handleInputChange = async (event, field) => {
    const value = event.target.value;
    setRecordDetails({
      ...recordDetails,
      [field]: value,
    });

    // Obtener el nombre del paciente si se ingresa un ID
    if (field === "PatientId" && value) {
      try {
        const patientRecord = await getRecord(parseInt(value, 10));
        setPatientName(`${patientRecord.patientFirstName} ${patientRecord.patientLastName}`);
      } catch (error) {
        console.error("Error al obtener el nombre del paciente:", error);
        setPatientName("Paciente no encontrado");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await updateRecord(recordDetails);
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Typography component="h2" variant="h2">
          Edición de Registro
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
                      label="Nombre del paciente"
                      type="text"
                      value={patientName}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      disabled
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
                        size="small"
                        onClick={handleSubmit}
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

export default EditRecord;

