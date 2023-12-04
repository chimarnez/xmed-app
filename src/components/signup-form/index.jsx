import { useState } from "react";
import {
  IconButton,
  MobileStepper,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { formDetail as userForm } from "../../constants/user";
import { createFieldInitialState } from "../../validation/common";
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
    updatedForm[fieldName] = updatedField;
    setCustomForm(updatedForm);
  };

  const textFields = stepFields[activeStep].map((fieldName) => {
    return (
      <TextField
        fullWidth
        key={fieldName}
        type={currentForm[fieldName].type}
        label={currentForm[fieldName].label}
        variant="outlined"
        margin="dense"
        value={customForm[fieldName].value}
        onChange={(e) => {
          handleChange(fieldName, e.currentTarget.value);
        }}
      />
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
              disabled={activeStep === stepFields.length - 1}
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
        <Button disabled variant="contained">
          Crear
        </Button>
      ) : (
        <Button onClick={handleNext} variant="contained">
          Siguiente
        </Button>
      )}
    </>
  );
};

export default SignupForm;
