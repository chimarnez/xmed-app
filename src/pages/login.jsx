import { Button, Stack, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Form, Link } from "react-router-dom";
import PasswordField from "../components/password-field";
import HomeFormContainer from "../components/home-form-container";
import EmailField from "../components/form-fields/email-field";
import { useState } from "react";

import { isInvalid, createFieldInitialState } from "../validation/common";

function LoginPage() {
  const [emailState, setEmailState] = useState(createFieldInitialState());
  const [passwordState, setPasswordState] = useState(createFieldInitialState());
  return (
    <HomeFormContainer>
      <Typography color="text.primary" variant="h4">
        Inicio de sesión
      </Typography>
      <Form method="POST">
        <Stack spacing={4}>
          <EmailField {...emailState} setState={setEmailState} />
          <PasswordField
            {...passwordState}
            setState={setPasswordState}
            id="password"
            name="password"
          />
          <Button
            disabled={isInvalid(emailState, passwordState)}
            variant="contained"
            type="submit"
          >
            Iniciar Sesión
          </Button>
        </Stack>
      </Form>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography color="text.secondary" variant="body1">
          ¿No tienes una cuenta?
        </Typography>
        <Link to="/signup">
          <Button variant="text" size="small" endIcon={<ArrowForwardIos />}>
            Registrate
          </Button>
        </Link>
      </Stack>
    </HomeFormContainer>
  );
}

export default LoginPage;
