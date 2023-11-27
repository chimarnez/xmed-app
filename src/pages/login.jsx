import { Button, Stack, TextField, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Form, Link } from "react-router-dom";
import PasswordField from "../components/password-field";
import HomeFormContainer from "../components/home-form-container";

function LoginPage() {
  return (
    <HomeFormContainer>
      <Typography color="text.primary" variant="h4">
        Inicio de sesión
      </Typography>
      <Form method="POST">
        <Stack spacing={4}>
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
          />
          <PasswordField id="password" name="password" />
          <Button variant="contained" type="submit">
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
