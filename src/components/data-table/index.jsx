import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";

import TableLayout from "./table-layout";
import DataTableHead from "./data-table-head";
import TableContentHead from "./table-content-head";
import DataTableRow from "./data-table-row";
import DataTableTools from "./data-table-tools";

const DataTable = ({
  data,
  columns,
  rowFormatter,
  tableTitle,
  searchLabel,
  createLabel,
  allowCreate = false,
  allowEdit = false,
  allowDelete = false,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState({});
  const [rows] = useState(data);
  const [selectedCount, setSelectedCount] = useState(0);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEdit = () => {
    const itemId = Object.keys(selected)[0];
    navigate("edit", { state: { id: itemId } });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function handleSelect(itemId) {
    if (!allowEdit && !allowDelete) {
      navigate(String(itemId));
      return;
    }
    let updatedSelection = { ...selected };
    let count = selectedCount;
    if (updatedSelection[itemId]) {
      delete updatedSelection[itemId];
      count--;
    } else {
      updatedSelection[itemId] = true;
      count++;
      if (!allowDelete) {
        updatedSelection = { [itemId]: true };
        count = 1;
      }
    }
    setSelected(updatedSelection);
    setSelectedCount(count);
  }
  function handleDetail(itemId, e) {
    e.stopPropagation();
    setSelectedCount(0);
    setSelected({});
    navigate(`${itemId}`);
  }
  return (
    <>
      <TableLayout>
        <DataTableHead title={tableTitle}>
          <DataTableTools
            deleteDisabled={selectedCount === 0}
            editDisabled={selectedCount !== 1}
            allowCreate={allowCreate}
            allowEdit={allowEdit}
            allowDelete={allowDelete}
            searchLabel={searchLabel}
            createLabel={createLabel}
            onEdit={handleEdit}
          />
        </DataTableHead>
        <TableContainer
          sx={{
            maxHeight: 440,
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableContentHead
              allowCheck={allowDelete || allowEdit}
              columns={columns}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <DataTableRow
                      isSelected={selected[row.id] ?? false}
                      allowCheck={allowDelete || allowEdit}
                      onDetail={handleDetail.bind(this, row.id)}
                      onClick={handleSelect.bind(this, row.id)}
                      key={"row" + i}
                    >
                      {rowFormatter(row, columns)}
                    </DataTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          labelRowsPerPage="Resultados por página: "
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableLayout>
    </>
  );
};

export default DataTable;
