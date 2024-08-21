import { useEffect } from "react";
import { useState } from "react"
import { getEventRegistrationsWithUserData, updatePayment } from "../../../services/firebase.services";


export const useEventRegistrations = (eventId) => {

    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (eventId) {
            setLoading(true);
            getEventRegistrationsWithUserData(eventId)
                .then((data) => {
                    setRegistrations(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [eventId]);


    const handlePaymentStatusChange = async (userId) => {
        setLoading(true);
        try {
            await updatePayment(eventId, userId);
            const updatedRegistrations = await getEventRegistrationsWithUserData(eventId);
            setRegistrations(updatedRegistrations);
        } catch (error) {
            console.error("Error updating payment status:", error);
        } finally {
            setLoading(false);
        }
    };


    return { registrations, loading, handlePaymentStatusChange }

}