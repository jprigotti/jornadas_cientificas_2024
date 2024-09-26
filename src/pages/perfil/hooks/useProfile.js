import { useState, useEffect } from "react";
import { getUserById } from "../../../services/firebase.services";
import { useGlobal } from "../../../hooks/useGlobal";

export const useProfile = (userId) => {
  const [userData, setUserData] = useState(null);
  const { showSpinner, setShowSpinner } = useGlobal();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;
      setShowSpinner(true);
      try {
        const res = await getUserById(userId);
        console.log("getUserById response is: ", res);
        setUserData(res);
      } catch (error) {
        console.log("Unable to retrieve user data");
      } finally {
        setShowSpinner(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return { userData };
};
