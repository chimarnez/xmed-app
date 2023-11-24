import HomeNav from "../components/home-nav";
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
    <>
      <HomeNav />
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
            sx={{
              border: 2,
              borderRadius: "32px",
              borderColor: "#27C08B",
              p: 5,
            }}
          >
            <Typography variant="h4">Inicio de Sesión</Typography>
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
              <Typography variant="body1">¿No tienes una cuenta?</Typography>
              <Link to="/signup">
                <Button
                  variant="text"
                  size="small"
                  endIcon={<ArrowForwardIos />}
                >
                  Registrate
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default LoginPage;
