import { useState } from "react";
import {
  IconButton,
  MobileStepper,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { form as userForm } from "../../constants/user";

// function signupReducer(state, action) {
//   switch (action.type) {
//     case "update": {
//       const updatedState = [...state];
//       const updatedStep = { ...updatedState[action.stepIndex] };
//       const updatedField = { ...updatedStep[action.field] };
//       updatedField.value = action.value;
//       updatedStep[action.field] = updatedField;
//       updatedState[action.stepIndex];
//       console.log(updatedStep);
//       return updatedState;
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// let item = {from: "user", fields: []}
function createSteps(form, items) {
  const stateForm = {};
  const steps = items.map((item) => {
    const step = {};
    if (!stateForm[item.from]) {
      stateForm[item.from] = {};
    }
    for (const field of item.fields) {
      const value = form[item.from][field].default ?? "";
      stateForm[item.from][field] = { value };
      step[field] = {
        ...form[item.from][field],
        from: item.from,
        touched: false,
        errors: [],
        value,
      };
    }
    return step;
  });
  console.log(stateForm);
  return { steps, stateForm };
}

const initialState = createSteps({ user: userForm }, [
  { from: "user", fields: ["email", "password"] },
  { from: "user", fields: ["firstName", "lastName"] },
  { from: "user", fields: ["birthDate", "gender"] },
  { from: "user", fields: ["address", "phone"] },
]);

const SignupForm = () => {
  // const [stepFields, dispatch] = useReducer(signupReducer, initialState.steps);
  const [stepFields] = useState(initialState.steps);
  const [customForm, setCustomForm] = useState(initialState.stateForm);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (fieldName, field, value) => {
    const updatedState = { ...customForm };
    const updatedForm = { ...updatedState[field.from] };
    const updatedField = { ...updatedForm[fieldName] };
    updatedField.value = value;
    updatedForm[fieldName] = updatedField;
    updatedState[field.from] = updatedForm;
    setCustomForm(updatedState);
    // dispatch({
    //   type: "update",
    //   value,
    //   stepIndex: activeStep,
    //   field: fieldName,
    // });
  };

  const textFields = Object.entries(stepFields[activeStep]).map(
    ([key, field]) => {
      return (
        <TextField
          fullWidth
          key={key}
          type={field.type}
          label={field.label}
          variant="outlined"
          margin="dense"
          value={customForm[field.from][key].value}
          onChange={(e) => {
            handleChange(key, field, e.currentTarget.value);
          }}
        />
      );
    }
  );

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
