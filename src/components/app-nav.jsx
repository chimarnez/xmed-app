import { useNavigate } from "react-router-dom";
import {
  styled,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  Avatar,
  AppBar,
} from "@mui/material";

import { NotificationsOutlined, Logout, Menu } from "@mui/icons-material";
import { APP_DRAWER_WIDTH } from "../constants/layout";
import { logout } from "../services/login";

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: APP_DRAWER_WIDTH,
    width: `calc(100% - ${APP_DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppNav = ({ open, toggleDrawer }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <StyledAppBar
      // sx={{ backgroundColor: "red" }}
      position="absolute"
      open={open}
    >
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          color="primary"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            transition: "opacity 0.5s",
            opacity: open ? 0 : 1,
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <NotificationsOutlined />
            </Badge>
          </IconButton>
          <Box sx={{ ml: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Avatar>X</Avatar>
            <Box sx={{ ml: 1 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="body1">XMED App</Typography>
            </Box>
            <Box sx={{ ml: 1 }} />
            <IconButton onClick={handleLogout} color="inherit">
              <Logout />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppNav;
