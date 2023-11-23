import { Link } from "react-router-dom";
import "../styles/nav.css";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import logo from "../assets/logo.png";

const HomeNav = () => {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl" sx={{ p: 1 }}>
        <Toolbar>
          <Link to="/">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              style={{ color: "white" }}
            >
              <img src={logo} alt="xmed logo" className="logo" width={42} />
              <Typography variant="h5" fontWeight="bold">
                <span style={{ color: "#27C08B", marginRight: 4 }}>X</span>MED
              </Typography>
            </Stack>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HomeNav;

/*
<nav className="home-nav">
      <ul>
        <li>
          <Link to="/">XMED</Link>
        </li>
      </ul>
    </nav>
 */
