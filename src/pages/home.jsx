import { Link } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import doctor from "../assets/doctor.jpeg";

const HomePage = () => {
  return (
    <Container sx={{ mt: 4, display: "flex", gap: 4, alignItems: "center" }}>
      <Stack spacing={5}>
        <Stack spacing={3}>
          <Typography color="primary" variant="h3">
            Administra eficientemente tus expedientes médicos
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Nuestra plataforma brinda una experiencia fluida para usuarios y
            médicos, permitiéndoles acceder y gestionar sus registros médicos de
            manera eficiente.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Link to="login">
            <Button variant="contained">Login</Button>
          </Link>
          <Link to="signup">
            <Button variant="outlined">Register</Button>
          </Link>
        </Stack>
      </Stack>
      <Box
        sx={{
          border: 2,
          borderRadius: "32px",
          borderColor: "#27C08B",
          backgroundImage: `url(${doctor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "65rem",
          height: "35rem",
        }}
      />
    </Container>
  );
};

export default HomePage;

/*
 * Se modificó el navbar para que solo tuviera el icono con el nombre de la organización.
 * El landing page se compondrá de:
 * - Title: "Administra eficientemente tus expedientes médicos."
 * - Description: "Nuestra plataforma brinda una experiencia fluida para usuarios y médicos, permitiéndoles acceder y gestionar sus registros médicos de manera eficiente."
 * - Buttons: Login and Register
 * - Image
 */
