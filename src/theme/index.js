import { createTheme } from "@mui/material";
import palette from "./palette";

const theme = createTheme({
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: palette.primary,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.paperDarkTransparent,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: palette.primary,
    },
  },
});

export default theme;
