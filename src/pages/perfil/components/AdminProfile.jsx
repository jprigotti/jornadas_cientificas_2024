import React, { useState } from 'react'
import { useProfile } from '../hooks/useProfile'
import { useEvents } from '../hooks/useEvents'
import { useEventRegistrations } from '../hooks/useEventRegistrations'

const AdminProfile = ({ userId }) => {
  const { loading, userData } = useProfile(userId)
  const { events, loading: eventsLoading } = useEvents()
  const [selectedEventId, setSelectedEventId] = useState('')
  const { registrations, loading: registrationsLoading } = useEventRegistrations(selectedEventId)
  
  const handleEventChange = (event) => {
    setSelectedEventId(event.target.value);
    console.log(event.target.value)
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ms-40 mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3'>
      <h2>Bienvenido {userData?.email}!</h2>
      <select onChange={handleEventChange} value={selectedEventId}>
        <option value="">Seleccionar Evento</option>
        {events?.map(event => (
          <option key={event.id} value={event.id}>{event.name}</option>
        ))}
      </select>
      {
        registrations && (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Estado de Pago</th>
              </tr>
            </thead>
            <tbody>
              {
                registrations.map(registrations=> (
                  <tr key={registrations.id}>
                    <td>{registrations.userName}</td>
                    <td>{registrations.userLastName}</td>
                    <td>{registrations.payment === 'pending' ? "Pendiente" : "Pagado"}</td>
                  </tr>
                ))
              }
            </tbody>

          </table>
        )
      }


    </div>
  )
}

export default AdminProfile