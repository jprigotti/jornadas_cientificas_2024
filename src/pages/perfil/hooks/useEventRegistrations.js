import React, { useEffect, useState } from 'react'
import { getRegistrationForEvent, getUserById } from '../../../services/firebase.services';
import { useProfile } from './useProfile';

export const useEventRegistrations = (eventId) => {

    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchRegistrations = async () => {
            if(!eventId) return; 

            try {
                const res = await getRegistrationForEvent(eventId);
                const userData = await 
                console.log("Esto es res:", res)
                setRegistrations(res);
            } catch (error) {
                console.log("Error fetching registrations: ", error);
                
            } finally {
                setLoading(false)
            }
        };

        fetchRegistrations();
    }, [eventId]);

    return { registrations, loading }
}
