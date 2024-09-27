import { useState, useEffect } from "react";
import { getUserById } from "../../../services/firebase.services";
import { useGlobal } from "../../../hooks/useGlobal";
import { useAuth } from "../../../core/auth/hooks/useAuth";

export const useProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const { setShowSpinner } = useGlobal();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user.uid) return;
      setShowSpinner(true);
      try {
        const res = await getUserById(user.uid);
        console.log("getUserById response is: ", res);
        setUserData(res);
      } catch (error) {
        console.log("Unable to retrieve user data");
      } finally {
        setShowSpinner(false);
      }
    };

    fetchUserData();
  }, [user.uid]);

  return { userData };
};
