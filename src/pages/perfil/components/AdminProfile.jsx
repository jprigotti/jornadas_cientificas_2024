import React, { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { useEvents } from "../hooks/useEvents";
import { useEventRegistrations } from "../hooks/useEventRegistrations";
import EventRegistrationsTable from "./EventRegistrationsTable";

const AdminProfile = ({ userId }) => {
  const { loading, userData } = useProfile(userId);
  const { events, loading: eventsLoading } = useEvents();
  const [selectedEventId, setSelectedEventId] = useState("");

  // const {
  //   registrations,
  //   loading: registrationsLoading,
  //   handlePaymentStatusChange,
  //   searchTerm,
  //   setSearchTerm,
  //   page,
  //   setPage,
  //   rowsPerPage,
  //   setRowsPerPage,
  //   totalRegistrations
  // } = useEventRegistrations(selectedEventId);

  const handleEventChange = (event) => {
    setSelectedEventId(event.target.value);
    useEventRegistrations(selectedEventId)
  };

  // if (loading || eventsLoading || registrationsLoading) {
  //   return <div>Loading...</div>;
  // }

  if (loading || eventsLoading) {
    return <div>Loading...</div>;
  }



  return (
    <div className=" w-auto h-full ms-40 mt-3 px-3 rounded-tl-xl bg-White flex flex-col items-center">
      <h2 className="w-full text-Black p-2 font-poppins text-lg font-semiBold">
        Bienvenido {userData?.email || "Usuario"}!
      </h2>
      <select
        onChange={handleEventChange}
        value={selectedEventId}
        className=" w-1/2 bg-White p-4 my-5 border border-solid border-Black rounded-lg outline-1 text-Black font-poppins text-lg"
      >
        <option value="">Seleccionar Evento</option>
        {events?.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </select>

      <EventRegistrationsTable
        eventId={selectedEventId}
      />
    </div>
  );
};

export default AdminProfile;


