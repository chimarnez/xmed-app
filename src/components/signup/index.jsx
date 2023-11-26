import { useState } from "react";
import { IconButton, MobileStepper, Container } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="xs">
      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, borderRadius: 1 }}
        nextButton={
          <IconButton
            color="primary"
            size="small"
            onClick={handleNext}
            disabled={activeStep === 5}
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
  );
};

export default Signup;
