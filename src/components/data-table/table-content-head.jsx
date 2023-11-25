import { TableCell, TableHead, TableRow, Checkbox } from "@mui/material";
import palette from "../../theme/palette";

const TableContentHead = ({ columns }) => {
  const cells = columns.map((column) => (
    <TableCell
      key={column.id}
      align={column.align}
      style={{
        ...column.style,
        backgroundColor: palette.appBgDark,
      }}
      sx={column.sx}
    >
      {column.label}
    </TableCell>
  ));
  return (
    <TableHead>
      <TableRow>
        <TableCell
          style={{
            backgroundColor: palette.appBgDark,
          }}
          padding="checkbox"
        >
          <Checkbox
            color="primary"
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all items",
            }}
          />
        </TableCell>
        {cells}
        <TableCell
          style={{
            backgroundColor: palette.appBgDark,
          }}
          padding="checkbox"
        ></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableContentHead;

//style minWidth

// sx={{
//     ...(column.id !== "name" && {
//       display: { xs: "none", sm: "table-cell" },
//     }),
//   }}
