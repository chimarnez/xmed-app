import { updateUser, getUser } from '../services/user';
import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  FormControl,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const genderOptions = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' },
  { value: 'O', label: 'Other' },
];

const EditUser = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser();
        setUserDetails(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  const handleInputChange = (event, field) => {
    setUserDetails({
      ...userDetails,
      [field]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Establecer loading a true cuando se envía el formulario
    try {
      await updateUser(userDetails);
      window.location.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Establecer loading a false cuando se complete la solicitud
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <Typography component="h2" variant="h2">
          Edición de Usuario
        </Typography>
        <Box my={2}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="First Name"
                      type="text"
                      name="firstName"
                      value={userDetails.firstName}
                      onChange={(e) => handleInputChange(e, 'firstName')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={(e) => handleInputChange(e, 'lastName')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText="Campo obligatorio"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Birth Date"
                      type="date"
                      name="birthDate"
                      value={userDetails.birthDate}
                      onChange={(e) => handleInputChange(e, 'birthDate')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FormControl fullWidth>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        name="gender"
                        value={userDetails.gender}
                        onChange={(e) => handleInputChange(e, 'gender')}
                      >
                        {genderOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
      
                    {/* Agregar otros campos (Phone, Address, Email, Password) utilizando TextField */}
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Phone"
                      type="number"
                      name="phone"
                      value={userDetails.phone}
                      onChange={(e) => handleInputChange(e, 'phone')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Address"
                      type="text"
                      name="address"
                      value={userDetails.address}
                      onChange={(e) => handleInputChange(e, 'address')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="email"
                      type="text"
                      name="email"
                      value={userDetails.email}
                      onChange={(e) => handleInputChange(e, 'email')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Password"
                      type="password"
                      name="password"
                      value={userDetails.password}
                      onChange={(e) => handleInputChange(e, 'password')}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Box sx={{ '& > button': { m: 1 } }}>
                        <LoadingButton
                          size="small"
                          onClick={handleSubmit} // Llama a la función handleSubmit sin pasar argumentos
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

export default EditUser;