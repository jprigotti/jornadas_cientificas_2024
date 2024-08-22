import React, { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { useEvents } from "../hooks/useEvents";
import { useEventRegistrations } from "../hooks/useEventRegistrations";

const AdminProfile = ({ userId }) => {
  const { loading, userData } = useProfile(userId);
  const { events, loading: eventsLoading } = useEvents();
  const [selectedEventId, setSelectedEventId] = useState("");
  const {
    registrations,
    loading: registrationsLoading,
    handlePaymentStatusChange,
  } = useEventRegistrations(selectedEventId);

  const handleEventChange = (event) => {
    setSelectedEventId(event.target.value);
  };

  if (eventsLoading || registrationsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ms-40 mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3">
      <h2>Bienvenido {userData?.email}!</h2>
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
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Estado de Pago</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration) => (
                <tr key={registration.id}>
                  <td>{registration.user.name}</td>
                  <td>{registration.user.lastName}</td>
                  <td>{registration.payment}</td>
                  <td>
                    {registration.payment === "pending" && (
                      <button
                        className=" bg-LightBlue text-White"
                        onClick={() =>
                          handlePaymentStatusChange(registration.id)
                        }
                      >
                        Confirmar Pago
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay usuarios registrados para este evento</p>
        )}
      </div>

      {/* Colocar un formulario */}
    </div>
  );
};

export default AdminProfile;
