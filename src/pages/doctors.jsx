import { useLoaderData } from "react-router-dom";
import { TableCell, Typography } from "@mui/material";
import DataTable from "../components/data-table";
// import ListObject from "../components/list-object";
// import EditDoctor from "../components/edit-doctor";
// import { useState } from "react";

// const DoctorsPage = () => {
//   const doctor = useLoaderData();
//   const [editing, setEditing] = useState(false);

//   const handleEditClick = () => {
//     setEditing(true);
//   };

//   return (
//     <div>
//       {editing ? (
//         <EditDoctor doctor={doctor} />
//       ) : (
//         <>
//           <ListObject data={doctor} />
//           <button onClick={handleEditClick}>Edit</button>
//         </>
//       )}
//     </div>
//   );
// };

const columns = [
  {
    id: "firstName",
    label: "Nombre",
    from: "User",
    sx: { display: { xs: "none", sm: "table-cell" } },
  },
  {
    id: "lastName",
    label: "Apellido",
    from: "User",
    sx: { display: { xs: "none", sm: "table-cell" } },
  },
  {
    id: "composedName",
    label: "Doctor",
    sx: { display: { sm: "none" } },
    compose: (row) => `${row.User.firstName} ${row.User.lastName}`,
  },
  {
    id: "specialization",
    label: "Especialidad",
  },
];

function formatter(row, columns) {
  return columns.map((column) => {
    const value = column.compose
      ? column.compose(row)
      : column.from
      ? row[column.from][column.id]
      : row[column.id];
    return (
      <TableCell key={column.id} align={column.align} sx={column.sx}>
        {column.format ? column.format(value) : value}
      </TableCell>
    );
  });
}

const DoctorsPage = () => {
  const data = useLoaderData();
  return (
    <DataTable
      tableTitle={
        <Typography
          component="h2"
          sx={{
            color: "#26C08B",
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
          Doctores
        </Typography>
      }
      rowFormatter={formatter}
      columns={columns}
      data={data}
    />
  );
};

export default DoctorsPage;
