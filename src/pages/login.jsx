import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Form, Link } from "react-router-dom";
import PasswordField from "../components/password-field";

function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Stack
          alignItems="center"
          spacing={3}
          sx={(theme) => ({
            border: 2,
            borderRadius: "24px",
            borderColor: theme.palette.primary.main,
            p: 5,
          })}
        >
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
        </Stack>
      </Box>
    </Container>
  );
}

export default LoginPage;
