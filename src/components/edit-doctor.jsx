import { updateDoctor, getDoctor } from '../services/doctor';
import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const EditDoctor = () => {
  const [loading, setLoading] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState({
    specialization: '',
    medicalLicense: '',
  });

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const doctor = await getDoctor();
        setDoctorDetails(doctor);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDoctor();
  }, []);

  const handleInputChange = (event, field) => {
    setDoctorDetails({
      ...doctorDetails,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await updateDoctor(doctorDetails);
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
          Edición de Doctor
        </Typography>
        <Box my={2}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Specialization"
                      type="text"
                      name="specialization"
                      value={doctorDetails.specialization}
                      onChange={(e) => handleInputChange(e, 'specialization')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Medical License"
                      type="text"
                      name="medicalLicense"
                      value={doctorDetails.medicalLicense}
                      onChange={(e) => handleInputChange(e, 'medicalLicense')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box sx={{ '& > button': { m: 1 } }}>
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

export default EditDoctor;
