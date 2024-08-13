import { useState, useEffect } from "react"
import {
    getRegistration,
    setRegistration,
    updatePayment
} from "../../../services/firebase.services"

export const useRegistration = (userId) => {
    const eventId = "ZbclMy93Cs9jzEYAgVui"
    const [loading, setLoading] = useState(true);
    const [userRegistration, setUserRegistration] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchRegistration = async () => {
            if (!userId) return;

            try {
                const res = await getRegistration(eventId, userId)
                console.log("getUserRegistration response is: ", res)
                setUserRegistration(res.data)
            } catch (error) {
                console.log("Unable to retrieve user inscription")
            } finally {
                setLoading(false)
            }
        }

        fetchRegistration();
    }, [userId, reload])


    const handleRegistration = async (userId) => {
        console.log("Registration in progress for user: ", userId, "in event ", eventId)
        const res = await setRegistration(eventId, userId)
        res.status
            ? console.log("Registration status: ", res.status)
            : console.log("Registration failed with: ", res.error)
        setReload(!reload);
    }

    const handlePayment = async (userId) => {
        console.log("Registration in progress for user: ", userId, "in event ", eventId)
        const res = await updatePayment(eventId, userId)
        res.status
            ? console.log("Payment status: ", res.status)
            : console.log("Payment failed with: ", res.error)
        setReload(!reload);
    }

    return {
        loading,
        userRegistration,
        handleRegistration,
        handlePayment
    }
}