import { useEffect, useState } from "react";
import {
  getEventRegistrationsWithUserData,
  updatePayment,
  getUserById,
} from "../../../services/firebase.services";
import Swal from "sweetalert2";
import { useGlobal } from "../../../hooks/useGlobal";


export const useEventRegistrations = (eventId) => {

  /*******************************************************
   * DECLARACION DE VARIABLES
   *******************************************************/
  const [registrations, setRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { showSpinner, setShowSpinner } = useGlobal();

  //Creo este object hook state para registrar las acciones de useRegistration y generar el reporte final.
  const paymentActions = {
    setPaymentStatus: false,
    setPaymentError: null,
    sendEmailStatus: false,
    sendEmailError: null,
  };

  const urlFetchAPI =
    "https://script.google.com/macros/s/AKfycby7UEKG0qsW81lVPB8Cx7rG96bGSqW9lsS5GQdKZTXLwh-0XJCUtnUOJQB0mwJtgI4FPA/exec";
  //   Link Spreadsheet https://docs.google.com/spreadsheets/d/1i7ULoXCjNaLVKFfaDxGUTUZEXzhI9trsJPiaJYO5Ndc/edit?gid=0#gid=0
  //santojanni.jornadas@gmail.com

  //Reestablecer la página a 0 en la paginación cuando cambia el eventID
  useEffect(() => {
    setPage(0);
  }, [eventId]);

  //Cargar los registros de datos cuando cambia el eventId
  useEffect(() => {
    const fetchData = async () => {
      if (eventId) {
        try {
          setShowSpinner(true);
          const data = await getEventRegistrationsWithUserData(eventId);
          setRegistrations(data);
        } catch (error) {
          setRegistrations([]);
        } finally {
          setShowSpinner(false);
        }
      } else {
        setRegistrations([]);
      }
    };
  
    fetchData();
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

    /**
    Si el user presiona el boton confirmButtonText del Sweatalert:
    1. se actualiza el registro en la DB
    2. se actualiza el hook registrations
    3. se buscan los datos del usuario en la DB
    4. se envía un correo electrónico
     */
    if (result.isConfirmed) {
      setShowSpinner(true); //dispara el spinner

      /* 1. actualizamos el registro en la DB
      updatePayment tiene validacion retorna un objeto response
      */
      const updatePaymentResponse = await updatePayment(eventId, userId);

      if (updatePaymentResponse.status) {
        const updatedRegistrations = await getEventRegistrationsWithUserData(
          eventId
        );
        setRegistrations(updatedRegistrations);

        paymentActions.setPaymentStatus = true;
        /*
        2. obtenemos los datos del usuario
        3. enviamos el mail de confirmación */
        try {
          //Llamo a la funcion getUserId de firebase.services que retorna id, data
          const userDataResponse = await getUserById(userId);
          console.log("Payment user data is_ ", userDataResponse);

          //armo el objeto para enviar el email
          const fetchData = {
            userData: userDataResponse,
            action: "payment",
          };

          // Fetch Gmail to send email
          const jsonResponse = await fetch(urlFetchAPI, {
            method: "POST",
            redirect: "follow",
            dataType: "json",
            accepts: "application/json",
            body: JSON.stringify(fetchData),
          });

          // Handle the response from the Google Apps Script endpoint
          if (jsonResponse.ok) {
            const objectResponse = await jsonResponse.json();

            // Handle the response from the Google Apps Script App
            if (objectResponse.status) {
              paymentActions.sendEmailStatus = true;
            } else {
              paymentActions.sendEmailError = objectResponse.error;
            }
          } else {
            paymentActions.sendEmailError =
              "Error al procesar el envío del email";
          }
        } catch (error) {
          paymentActions.sendEmailError = error;
        } finally {
          setShowSpinner(false)
        }
      } else {
        paymentActions.setPaymentError = updatePaymentResponse.error;
      }

      if (paymentActions.setPaymentStatus && paymentActions.sendEmailStatus) {
        Swal.fire({
          title: "¡Pago confirmado!",
          html: "<p>Pago registrado exitosamente</p><p>Se ha enviado un correo de confirmación</p>",
          icon: "success",
          background: "#FAFAFA",
          color: "#025951",
          iconColor: "#025951",
          width: "36em",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#038C7F",
        });
      } else {
        Swal.fire({
          title: `Ups, Algo ha salido mal!`,
          html: `<p>Estado de pago: ${
            paymentActions.setPaymentStatus
              ? "exitoso"
              : paymentActions.setPaymentError
          }</p>
          <p>Envío de email de confirmación: ${
            paymentActions.sendEmailStatus
              ? "exitoso"
              : paymentActions.sendEmailError
          }</p>
          `,
          icon: "error",
          background: "#FAFAFA",
          color: "#025951",
          iconColor: "#d33",
          width: "36em",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#d33",
        });
      }

      setShowSpinner(false)
    }
  };

  // Filtra registros basados en el término de búsqueda
  const filteredRegistrations = registrations.filter((registration) =>
    `${registration.user?.name} ${registration.user?.lastName}`
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
    handlePaymentStatusChange,
    searchTerm,
    setSearchTerm,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalRegistrations: filteredRegistrations.length,
  };
};
