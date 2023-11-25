import { CssBaseline, Box, Toolbar, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppNav from "../components/app-nav";
import AppDrawer from "../components/app-drawer";
import { useState } from "react";
import UserProvider from "../services/user-provider";

const App = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <UserProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppNav open={open} toggleDrawer={toggleDrawer} />
        <AppDrawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: "transparent",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </UserProvider>
  );
};

export default App;
