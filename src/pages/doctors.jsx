import { useLoaderData } from "react-router-dom";
import { TableCell } from "@mui/material";
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
  { id: "firstName", label: "Nombre", from: "User" },
  { id: "lastName", label: "Apellido", from: "User" },
  {
    id: "specialization",
    label: "Especialidad",
  },
];

function formatter(row, columns) {
  return columns.map((column) => {
    const value = column.from ? row[column.from][column.id] : row[column.id];
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
      tableTitle="Doctores"
      rowFormatter={formatter}
      columns={columns}
      data={data}
    />
  );
};

export default DoctorsPage;
