import { useState, useEffect } from "react";
import { getUserById } from "../../../services/firebase.services";
import { useGlobal } from "../../../hooks/useGlobal";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { updateUserData } from "../../../services/firebase.services";

export const useProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const { setShowSpinner } = useGlobal();
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user.uid) return;
      setShowSpinner(true);
      try {
        const res = await getUserById(user.uid);
        console.log("getUserById response is: ", res);
        setUserData(res);
        setFormData({
          name: res?.name || "",
          lastName: res?.lastName || "",
          dni: res?.dni || "",
          cell: res?.cell || "",
          servicio: res?.servicio || "",
          category: res?.category || "",
          email: res?.email || "",
        });
      } catch (error) {
        console.log("Unable to retrieve user data");
      } finally {
        setShowSpinner(false);
      }
    };

    fetchUserData();
  }, [user.uid]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowSpinner(true);
      // TODOS: Check user.uid and formData are not empty
      const responseUpdateUserData = await updateUserData(user.uid, formData);
      if (!responseUpdateUserData.status)
        throw new Error(responseUpdateUserData.error);
    } catch (error) {
      console.log(error);
    } finally {
      setEditing(false);
      setShowSpinner(false);
    }
  };

  return {
    userData,
    formData,
    handleChange,
    handleSubmit,
    editing,
    handleEdit,
    handleCancel
  };
};
