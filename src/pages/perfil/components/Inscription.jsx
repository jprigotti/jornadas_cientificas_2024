import React from 'react'
import { useEvents } from '../hooks/useEvents'

const Inscription = ({ userId }) => {
    const { events } = useEvents();

    const handleInscription = (userId, eventId) => {
        console.log("Inscription in progress for user: ", userId, "en evento ", eventId)
    }

    return (
        <div className='flex flex-col items-center'>
            {events?.map(event => (
                <div key={event.id} className='event-item'>
                    <p>{event.name}</p>
                    <button onClick={() => handleInscription(userId, event.id)}>
                        Inscribirte
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Inscription
