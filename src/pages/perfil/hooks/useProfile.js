import { useState, useEffect } from "react"
import { getUserById } from "../../../services/firebase.services"

export const useProfile = (userId) => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!userId) return;

            try {
                const res = await getUserById(userId)
                console.log("getUserById response is: ", res)
                setUserData(res);
            } catch (error) {
                console.log("Unable to retrieve user data")
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, [userId])

    return { loading, userData }

}