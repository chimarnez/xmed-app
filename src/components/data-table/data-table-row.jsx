import { TableCell, TableRow, IconButton, Checkbox } from "@mui/material";
import { VisibilityOutlined } from "@mui/icons-material";

const DataTableRow = ({
  children,
  isSelected,
  onClick,
  onDetail,
  label,
  allowCheck,
}) => {
  return (
    <TableRow
      hover
      role="checkbox"
      selected={isSelected}
      onClick={onClick}
      tabIndex={-1}
    >
      <TableCell
        sx={{ display: { sm: allowCheck ? "table-cell" : "none", xs: "none" } }}
        padding="checkbox"
      >
        <Checkbox
          color="primary"
          checked={isSelected}
          inputProps={{
            "aria-labelledby": label,
          }}
        />
      </TableCell>
      {children}
      <TableCell padding="checkbox">
        <IconButton onClick={onDetail} color="primary" size="small">
          <VisibilityOutlined fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default DataTableRow;
