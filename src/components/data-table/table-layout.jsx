import { Paper, GlobalStyles } from "@mui/material";

import palette from "../../theme/palette";

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

const TableLayout = ({ children }) => {
  return (
    <>
      {scrollGlobalStyles}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>{children}</Paper>
    </>
  );
};

export default TableLayout;
