import { useState, useEffect } from "react"
import { getUserInscription, setRegistration } from "../../../services/firebase.services"

export const useInscription = (userId) => {
    const eventId = "ZbclMy93Cs9jzEYAgVui"
    const [loading, setLoading] = useState(true);
    const [userInscription, setUserInscription] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const fetchUserInscription = async () => {
            if (!userId) return;

            try {
                const res = await getUserInscription(eventId, userId)
                console.log("getUserInscription response is: ", res)
                setUserInscription(res.data)
            } catch (error) {
                console.log("Unable to retrieve user inscription")
            } finally {
                setLoading(false)
            }
        }

        fetchUserInscription();
    }, [userId, reload])


    const handleInscription = async (userId) => {
        console.log("Inscription in progress for user: ", userId, "en evento ", eventId)
        const res = await setRegistration(eventId, userId)
        res.status
            ? console.log("Registration status: ", res.status)
            : console.log("Registration failed with: ", res.error)
        setReload(!reload);
    }

    return { loading, userInscription, handleInscription }
}