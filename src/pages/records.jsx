import {
  TableCell,
  Typography,
  // useMediaQuery, useTheme
} from "@mui/material";
import { useLoaderData } from "react-router-dom";
import DataTable from "../components/data-table";
import { formatDate } from "../utils/date";
import { toShortText } from "../utils/text";

// columns puede incluir un formateador configurable
// tambien puede incluir style y sx para definir que campos de deben mostrar en responsive
const columns = [
  { id: "id", label: "ID" },
  { id: "diagnosis", label: "Diagnóstico" },
  {
    id: "symptoms",
    label: "Síntomas",
    format: (text) => toShortText(text, 18),
    sx: { display: { xs: "none", sm: "table-cell" } },
  },
  { id: "issuedOn", label: "Fecha", format: formatDate },
];

function formatter(row, columns) {
  return columns.map((column) => {
    const value = row[column.id];
    return (
      <TableCell key={column.id} align={column.align} sx={column.sx}>
        {column.format ? column.format(value) : value}
      </TableCell>
    );
  });
}

const RecordsPage = () => {
  const records = useLoaderData();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <DataTable
      rowFormatter={formatter}
      columns={columns}
      data={records}
      tableTitle={
        <Typography
          component="h2"
          sx={{
            color: "primary.main",
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "4rem",
            },
          }}
          variant="h2"
        >
          Mis expedientes
        </Typography>
      }
    />
  );
};

export default RecordsPage;
