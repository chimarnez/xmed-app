import { updateUser, getUser } from "../services/user";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { formatInputDate } from "../utils/date";
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhone,
  validateFilled,
  validateBirthDate,
} from '../validation/user'

const genderOptions = [
  { value: "M", label: "Masculino" },
  { value: "F", label: "Femenino" },
  { value: "O", label: "Otro" },
];

const EditUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const [initialUserDetails, setInitialUserDetails] = useState({});

  const [validationErrors, setValidationErrors] = useState({});

  const formatUser = (user) => {
    const updatedUser = { ...userDetails };
    Object.keys(updatedUser).forEach((key) => {
      if (user[key]) updatedUser[key] = user[key];
    });
    if (user.birthDate) {
      updatedUser.birthDate = formatInputDate(user.birthDate);
    }
    setUserDetails(updatedUser);
    setInitialUserDetails(updatedUser);
  };

  const getModifiedFields = () => {
    let modifiedFields = {};
    for (let key in userDetails) {
      if (userDetails[key] !== initialUserDetails[key]) {
        modifiedFields[key] = userDetails[key];
      }
    }
    return modifiedFields;
  };

  const hasUserDetailsChanged = () => {
    return Object.keys(userDetails).some(key => userDetails[key] !== initialUserDetails[key]);
  };

  const hasValidationErrors = () => {
    return Object.values(validationErrors).some(error => error !== '');
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser();
        formatUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let validationError = '';
    switch (name) {
      case 'email':
        validationError = validateEmail(value);
        break;
      case 'password':
        if (value !== '') { // Solo validar la contraseña si el usuario ha ingresado algo
          validationError = validatePassword(value);
        }
        break;
      case 'firstName':
      case 'lastName':
        validationError = validateName(value);
        break;
      case 'phone':
        validationError = validatePhone(value);
        break;
      case 'address':
        validationError = validateFilled(value);
        break;
      case 'birthDate':
        validationError = validateBirthDate(value);
        break;
      default:
        break;

    }
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
    setValidationErrors(prevErrors => ({
      ...prevErrors,
      [name]: validationError,
    }));
    // Aquí puedes establecer el error de validación en el estado para mostrarlo en la interfaz de usuario
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const modifiedFields = getModifiedFields();
      console.log(modifiedFields);
      await updateUser(modifiedFields);
      navigate("/app/redirect", { state: { toPath: "/app/users" } });
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
          Edición de Usuario
        </Typography>
        <Box my={2}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Nombre (s)"
                      type="text"
                      name="firstName"
                      value={userDetails.firstName}
                      onChange={handleInputChange}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText={validationErrors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Apellidos"
                      type="text"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleInputChange}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText={validationErrors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Fecha de nacimiento"
                      type="date"
                      name="birthDate"
                      value={userDetails.birthDate}
                      onChange={(e) => handleInputChange(e, "birthDate")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText={validationErrors.birthDate}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FormControl fullWidth>
                      <InputLabel>Género</InputLabel>
                      <Select
                        name="gender"
                        value={userDetails.gender}
                        onChange={(e) => handleInputChange(e, "gender")}
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
                      label="Teléfono"
                      type="number"
                      name="phone"
                      value={userDetails.phone}
                      onChange={(e) => handleInputChange(e, "phone")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText={validationErrors.phone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Dirección"
                      type="text"
                      name="address"
                      value={userDetails.address}
                      onChange={(e) => handleInputChange(e, "address")}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText={validationErrors.address}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Correo electrónico"
                      type="text"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText={validationErrors.email} // Mostrar el mensaje de error de validación
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      label="Contraseña"
                      type="password"
                      name="password"
                      value={userDetails.password}
                      onChange={handleInputChange}
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      helperText={validationErrors.password}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box sx={{ "& > button": { m: 1 } }}>
                      <LoadingButton
                        size="small"
                        onClick={handleSubmit}
                        loading={loading}
                        variant="outlined"
                        disabled={!hasUserDetailsChanged() || hasValidationErrors() || loading}
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
