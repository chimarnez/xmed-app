import { Box, Container, Stack } from "@mui/material";

const HomeFormContainer = ({ children }) => {
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
          {children}
        </Stack>
      </Box>
    </Container>
  );
};

export default HomeFormContainer;
