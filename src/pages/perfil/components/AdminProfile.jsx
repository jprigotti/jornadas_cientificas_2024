import React, { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { useEvents } from "../hooks/useEvents";
import { useEventRegistrations } from "../hooks/useEventRegistrations";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';

const AdminProfile = ({ userId }) => {
  const { loading, userData } = useProfile(userId);
  const { events, loading: eventsLoading } = useEvents();
  const [selectedEventId, setSelectedEventId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {
    registrations,
    loading: registrationsLoading,
    handlePaymentStatusChange,
  } = useEventRegistrations(selectedEventId);

  const handleEventChange = (event) => {
    setSelectedEventId(event.target.value);
  };

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

  if (loading || eventsLoading || registrationsLoading) {
    return <div>Loading...</div>;
  }

  // Filtrar las filas según el término de búsqueda
  const filteredRegistrations = registrations.filter((registration) =>
    `${registration.user.name} ${registration.user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Calcular el número de filas a mostrar para la paginación
  const paginatedRegistrations = filteredRegistrations.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="ms-40 mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3">
      <h2>Bienvenido {userData?.email || "Usuario"}!</h2>
      <select onChange={handleEventChange} value={selectedEventId}>
        <option value="">Seleccionar Evento</option>
        {events?.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </select>

      <div>
        {registrations.length > 0 ? (
          <>
            <TextField
              label="Buscar por nombre o apellido"
              id="standard-size-normal"
              value={searchTerm}
              onChange={handleSearchChange}
              variant="standard"
              className="my-6"
            />

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Apellido</TableCell>
                    <TableCell align="center">Estado del Pago</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRegistrations.map((registration) => (
                    <TableRow
                      key={registration.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {registration.user.name}
                      </TableCell>
                      <TableCell align="center">
                        {registration.user.lastName}
                      </TableCell>
                      <TableCell align="center">
                        {registration.payment === "pending" ? "Pendiente" : "Pagado"}
                      </TableCell>
                      <TableCell align="center">
                        {registration.payment === "pending" && (
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => handlePaymentStatusChange(registration.id)}
                          >
                            Confirmar Pago
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              component="div"
              count={filteredRegistrations.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              labelRowsPerPage="Seleccione Filas por página"
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        ) : (
          <p>No hay usuarios registrados para este evento</p>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;

