import { GlobalStyles, Container, Box } from "@mui/material";

import palette from "../theme/palette";

const scrollGlobalStyles = (
  <GlobalStyles
    styles={{
      "*::-webkit-scrollbar-thumb": {
        borderRadius: "5px",
        backgroundColor: palette.paperDarkTransparent,
      },
      "*::-webkit-scrollbar": {
        width: 6,
      },
    }}
  />
);

const PageLayout = ({ children }) => {
  return (
    <>
      {scrollGlobalStyles}
      <Container
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box sx={{ overflowX: "auto" }}>{children}</Box>
      </Container>
    </>
  );
};

export default PageLayout;
