import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import HomeFormContainer from "../components/home-form-container";
import SignupForm from "../components/signup-form";

const SignupPage = () => {
  return (
    <HomeFormContainer>
      <Typography color="text.primary" variant="h4">
        Crea tu cuenta
      </Typography>
      <SignupForm />
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography color="text.secondary" variant="body1">
          ¿Ya tienes una cuenta?
        </Typography>
        <Link to="/login">
          <Button variant="text" size="small" endIcon={<ArrowForwardIos />}>
            Acceder
          </Button>
        </Link>
      </Stack>
    </HomeFormContainer>
  );
};

export default SignupPage;
