import { useEffect } from "react";
import { useState } from "react";
import {
  getEventRegistrationsWithUserData,
  updatePayment,
} from "../../../services/firebase.services";

export const useEventRegistrations = (eventId) => {
  //Aqui se almacenan los datos de la query del user
  const [registration, setRegistration] = useState([]);
  //Aqui se almacenan los datos de todos los users registrados al evento
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (eventId || eventId != "") {
      setLoading(true);
      getEventRegistrationsWithUserData(eventId)
        .then((data) => {
          setRegistrations(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
        console.log("set empty registrations")
      setRegistrations([]);
    }
  }, [eventId]);

  const handlePaymentStatusChange = async (userId) => {
    setLoading(true);
    try {
      await updatePayment(eventId, userId);
      const updatedRegistrations = await getEventRegistrationsWithUserData(
        eventId
      );
      setRegistrations(updatedRegistrations);
    } catch (error) {
      console.error("Error updating payment status:", error);
    } finally {
      setLoading(false);
    }
  };

  return { registrations, loading, handlePaymentStatusChange };
};
