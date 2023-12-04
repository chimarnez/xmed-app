import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  MobileStepper,
  Container,
  TextField,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { formDetail as userForm } from "../../constants/user";
import { createFieldInitialState, isInvalid } from "../../validation/common";
import { createUser } from "../../services/user";
// import { formDetail as doctorForm } from "../../constants/doctor";
// import { formDetail as patientForm } from "../../constants/patient";

function createForm(form, items) {
  const stateForm = {};
  items.forEach((item) => {
    for (const fieldName of item) {
      const fieldDetail = form[fieldName];
      const value = fieldDetail.default ?? "";
      stateForm[fieldName] = createFieldInitialState(
        value,
        fieldDetail.required
      );
    }
  });
  return stateForm;
}

const userSteps = [
  ["email", "password"],
  ["firstName", "lastName"],
  ["birthDate", "gender"],
  ["address", "phone"],
];

// const patientSteps = [
//   ["healthInsurance", "bloodType"],
//   ["weight", "height"],
//   ["allergies", "chronicDiseases"],
//   ["currentMedication", "familyHistory"],
// ];

// const doctorSteps = [
//   ["specialization", "medicalLicence"],
// ];

// const formPages = [
//   {name: "user", detail: userForm, steps: userSteps, initial: createForm(userForm, userSteps)},
//   {name: "patient", detail: patientForm, steps: patientSteps, initial: createForm(patientForm, patientSteps)},
//   {name: "doctor", detail: doctorForm, steps: doctorSteps, initial: createForm(doctorForm, doctorSteps)},
// ]

const SignupForm = () => {
  // const [stepFields, dispatch] = useReducer(signupReducer, initialState.steps);
  const [stepFields] = useState(userSteps);
  const [currentForm] = useState(userForm);
  const [customForm, setCustomForm] = useState(createForm(userForm, userSteps));
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // const [created, setCreated] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (fieldName, value) => {
    const updatedForm = { ...customForm };
    const updatedField = { ...updatedForm[fieldName] };
    updatedField.value = value;
    const validation = currentForm[fieldName].validation;
    if (updatedField.touched && validation) {
      updatedField.error = validation(value);
    }
    updatedForm[fieldName] = updatedField;
    setCustomForm(updatedForm);
  };

  const handleBlur = (fieldName, value) => {
    if (currentForm[fieldName].touched) return;
    const updatedForm = { ...customForm };
    const updatedField = { ...updatedForm[fieldName] };
    updatedField.touched = true;
    const validation = currentForm[fieldName].validation;
    if (validation) {
      updatedField.error = validation(value);
    }
    updatedForm[fieldName] = updatedField;
    setCustomForm(updatedForm);
  };

  const handleCreate = async () => {
    setLoading(true);
    const userData = Object.fromEntries(
      Object.entries(customForm).map(([key, field]) => [key, field.value])
    );
    try {
      await createUser(userData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  let disabled =
    loading ||
    isInvalid(
      ...stepFields[activeStep].map((fieldName) => customForm[fieldName])
    );
  const textFields = stepFields[activeStep].map((fieldName) => {
    const error = customForm[fieldName].error;
    return currentForm[fieldName].type !== "select" ? (
      <Box key={fieldName} sx={{ width: "100%" }}>
        <TextField
          error={!!error}
          fullWidth
          type={currentForm[fieldName].type}
          label={currentForm[fieldName].label}
          variant="outlined"
          margin="dense"
          value={customForm[fieldName].value}
          onChange={(e) => {
            handleChange(fieldName, e.currentTarget.value);
          }}
          onBlur={(e) => {
            handleBlur(fieldName, e.currentTarget.value);
          }}
        />
        {error && (
          <Typography variant="caption" color="error">
            * {error}
          </Typography>
        )}
      </Box>
    ) : (
      <FormControl key={fieldName} fullWidth>
        <InputLabel>{currentForm[fieldName].label}</InputLabel>
        <Select
          name={fieldName}
          label={currentForm[fieldName].label}
          value={customForm[fieldName].value}
          onChange={(e) => handleChange(fieldName, e.target.value)}
          onBlur={(e) => {
            handleBlur(fieldName, e.target.value);
          }}
          // onChange={(e) => handleInputChange(e, "gender")}
        >
          {currentForm[fieldName].options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {error && (
          <Typography variant="caption" color="error">
            * {error}
          </Typography>
        )}
      </FormControl>
    );
  });

  return (
    <>
      <Container maxWidth="xs">
        <MobileStepper
          variant="progress"
          steps={stepFields.length}
          position="static"
          activeStep={activeStep}
          sx={{
            maxWidth: 400,
            flexGrow: 1,
            borderRadius: 1,
            backgroundColor: "transparent",
          }}
          nextButton={
            <IconButton
              color="primary"
              size="small"
              onClick={handleNext}
              disabled={activeStep === stepFields.length - 1 || disabled}
            >
              <KeyboardArrowRight />
            </IconButton>
          }
          backButton={
            <IconButton
              color="primary"
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </IconButton>
          }
        />
      </Container>
      {textFields}
      {activeStep === stepFields.length - 1 ? (
        <Button onClick={handleCreate} disabled={disabled} variant="contained">
          Crear
        </Button>
      ) : (
        <Button disabled={disabled} onClick={handleNext} variant="contained">
          Siguiente
        </Button>
      )}
    </>
  );
};

export default SignupForm;
