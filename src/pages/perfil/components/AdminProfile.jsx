import React, { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { useEvents } from "../hooks/useEvents";
import EventRegistrationsTable from "./EventRegistrationsTable";

const AdminProfile = ({ userId }) => {
  const { userData } = useProfile(userId);
  const { events } = useEvents();
  const [selectedEventId, setSelectedEventId] = useState("");

  const handleEventChange = (event) => {
    setSelectedEventId(event.target.value);
  };


  return (
    <div className="w-auto h-full mt-3 px-3 rounded-tl-xl bg-White flex flex-col items-center laptop1:ms-40">
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


