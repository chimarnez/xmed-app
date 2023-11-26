import { useParams } from "react-router-dom";
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
        <Table sx={{ border: "none" }}>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ border: "none", paddingBottom: 2 }}
              >
                Nombre del paciente:
              </TableCell>
              <TableCell sx={{ border: "none", paddingBottom: 2 }}>
                {record.patientFirstName} {record.patientLastName}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ border: "none", paddingBottom: 2 }}
              >
                Atendido por:
              </TableCell>
              <TableCell sx={{ border: "none", paddingBottom: 2 }}>
                {record.doctorFirstName} {record.doctorLastName}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ border: "none", paddingBottom: 2 }}
              >
                Diagnostico:
              </TableCell>
              <TableCell sx={{ border: "none", paddingBottom: 2 }}>
                {record.diagnosis}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ border: "none", paddingBottom: 2 }}
              >
                Sintomas:
              </TableCell>
              <TableCell sx={{ border: "none", paddingBottom: 2 }}>
                {record.symptoms}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ border: "none", paddingBottom: 2 }}
              >
                Tratamiento:
              </TableCell>
              <TableCell sx={{ border: "none", paddingBottom: 2 }}>
                {record.treatment}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                sx={{ border: "none", paddingBottom: 2 }}
              >
                Fecha:
              </TableCell>
              <TableCell sx={{ border: "none", paddingBottom: 2 }}>
                {formatDate(record.issuedOn)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        component={RouterLink}
        to="/app/medical-history"
        variant="contained"
        color="primary"
      >
        Regresar
      </Button>
    </Box>
  );
};

export default RecordDetails;
