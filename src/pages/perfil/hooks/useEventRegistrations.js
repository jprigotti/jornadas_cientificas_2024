import { useEffect, useState } from "react";
import {
  getEventRegistrationsWithUserData,
  updatePayment,
} from "../../../services/firebase.services";
import Swal from "sweetalert2";

export const useEventRegistrations = (eventId) => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //Reestablecer la página a 0 en la paginación cuando cambia el eventID
  useEffect(() => {
    setPage(0);
  }, [eventId]);

  //Cargar los registros de datos cuando cambia el eventId
  useEffect(() => {
    if (eventId) {
      setLoading(true);
      getEventRegistrationsWithUserData(eventId)
        .then((data) => {
          console.log('Datos recibidos:', data);
          setRegistrations(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setRegistrations([]);
    }
  }, [eventId]);

  const handlePaymentStatusChange = async (userId) => {
    const result = await Swal.fire({
      title: "Confirmar Pago",
      text: "¿Deseas confirmar el pago para este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, confirmar",
      cancelButtonText: "Cancelar",
      background: "#FAFAFA",
      color: "#025951",
      iconColor: "#025951",
      width: "36em",
      confirmButtonColor: "#038C7F",
      cancelButtonColor: "#d33",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        await updatePayment(eventId, userId);
        const updatedRegistrations = await getEventRegistrationsWithUserData(eventId);
        setRegistrations(updatedRegistrations);
        Swal.fire({
          title: "¡Pago confirmado!",
          text: "El estado del pago ha sido actualizado exitosamente.",
          icon: "success",
          background: "#FAFAFA",
          color: "#025951",
          iconColor: "#025951",
          width: "36em",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#038C7F",
        });
      } catch (error) {
        console.error("Error updating payment status:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al actualizar el estado del pago.",
          icon: "error",
          background: "#FAFAFA",
          color: "#025951",
          iconColor: "#d33",
          width: "36em",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#d33",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // Filtra registros basados en el término de búsqueda
  const filteredRegistrations = registrations.filter((registration) =>
    `${registration.user.name} ${registration.user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Calcula registros para la paginación
  const paginatedRegistrations = filteredRegistrations.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return {
    registrations: paginatedRegistrations,
    loading,
    handlePaymentStatusChange,
    searchTerm,
    setSearchTerm,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalRegistrations: filteredRegistrations.length
  };
};
