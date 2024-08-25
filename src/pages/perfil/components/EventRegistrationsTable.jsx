import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import TextField from "@mui/material/TextField";
import { useEventRegistrations } from "../hooks/useEventRegistrations";

const EventRegistrationsTable = ({ eventId }) => {
  const {
    registrations,
    searchTerm,
    setSearchTerm,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalRegistrations,
    handlePaymentStatusChange,
  } = useEventRegistrations(eventId);

  const tableItems = ["Dni", "Nombre", "Apellido","Categoría", "Estado del Pago", "Acciones"];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log("Hay registraciones?",registrations)

  return (
    <>
      <TextField
        label="Buscar por nombre o apellido"
        id="standard-size-normal"
        value={searchTerm}
        onChange={handleSearchChange}
        variant="standard"
        sx={{
          marginBottom: 2,
          width: "100%",
          maxWidth: 400,
        }}
      />

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, maxHeight: 900 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#005996" }}>
              {tableItems.map((header, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{ fontWeight: "bold", color: "#fff", padding: "10px 16px", width: 150 }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {registrations?.length > 0 ? (
              registrations?.map((registration) => (
                <TableRow
                  key={registration.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: registration.id % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {registration.user.dni} {/* Asumiendo que hay un campo dni */}
                  </TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>{registration.user.name}</TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>{registration.user.lastName}</TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>{registration.user.category}</TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>
                    {registration.payment === "pending" ? "Pendiente" : "Pagado"}
                  </TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>
                    {registration.payment === "pending" && (
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handlePaymentStatusChange(registration.id)}
                        sx={{
                          backgroundColor: "#005996",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#584ba0",
                          },
                        }}
                      >
                        Confirmar Pago
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{fontSize: 18}}>
                  No se encuentran registros
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={totalRegistrations}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Seleccione Filas por página"
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ marginTop: 2 }}
      />
    </>
  );
};

export default EventRegistrationsTable;

