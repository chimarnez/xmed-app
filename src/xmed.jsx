import { RouterProvider } from "react-router-dom";
import { ThemeProvider, Box } from "@mui/material";

import router from "./router";
import theme from "./theme";
import background from "./assets/background.jpg";
import palette from "./theme/palette";

function Xmed() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          backgroundImage: `url(${background})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: palette.appBackground,
            height: "100vh",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Xmed;
