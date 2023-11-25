import { TableContainer, Box, Typography, Divider } from "@mui/material";

const DataTableHead = ({ title, children }) => {
  return (
    <TableContainer
      sx={{
        maxHeight: 440,
      }}
    >
      <Box sx={{ width: "100%", p: 2 }}>
        <Typography variant="body1" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {children}
      </Box>
    </TableContainer>
  );
};

export default DataTableHead;
