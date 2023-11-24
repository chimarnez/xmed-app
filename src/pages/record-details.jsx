import { useParams, Link } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getRecord } from "../services/records";
import { formatDate } from "../utils/date";
import { Link as RouterLink } from "react-router-dom";

const RecordDetails = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    getRecord(id)
      .then(setRecord)
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!record) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Diagnostico
              </TableCell>
              <TableCell>{record.diagnosis}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Sintomas
              </TableCell>
              <TableCell>{record.symptoms}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Tratamiento
              </TableCell>
              <TableCell>{record.treatment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Fecha
              </TableCell>
              <TableCell>{formatDate(record.issuedOn)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        component={RouterLink}
        to="/app/records"
        variant="contained"
        color="primary"
      >
        Regresar
      </Button>
    </Box>
  );
};

export default RecordDetails;
