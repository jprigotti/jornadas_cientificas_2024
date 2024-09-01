import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmail,
  signUpWithEmail,
  saveUserInDB,
} from "../../../services/firebase.services";
import Swal from "sweetalert2";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  
  const signUpEmail = async (formData) => {
    try {
      const responseSignUp = await signUpWithEmail(
        formData.email,
        formData.password
      );
      console.log("Registration response: ", responseSignUp.user);
      const user = {
        uid: responseSignUp.user.uid,
        name: formData.name,
        lastName: formData.lastName,
        dni: formData.dni,
        cell: formData.cell,
        category: formData.category,
        email: formData.email,
      };
      const responseSaveUserDB = await saveUserInDB(user);
      console.log("Save user in DB response: ", responseSaveUserDB);
    } catch (error) {
      console.log("Registration error: ", error);
    }
  };

  const signInEmail = async (event) => {
    event.preventDefault();

    try {
      const form = new FormData(event.target);
      const { email, password } = Object.fromEntries(form.entries());
      const response = await signInWithEmail(email, password);
      console.log("signInWithEmail response is: ", response);
      Swal.fire({
        title: `Bienvenido ${response.user.email} !`,
        background: "#FAFAFA",
        color: "#025951",
        iconColor: "#025951",
        icon: "success",
        width: "36em",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#038C7F",
      });
      navigate("/perfil");
    } catch (error) {
      console.log(error.code);
      let customMessage;
      switch (error.code) {
        case "auth/invalid-credential":
          customMessage =
            "Las credenciales son incorrectas. Por favor revise email y contraseña.";
          break;
        case "auth/user-not-found":
          customMessage =
            "No se ha encontrado ninguna cuenta con este email. Por favor revise el email o registrese.";
          break;
        case "auth/wrong-password":
          customMessage =
            "La contraseña es incorrecta. Por favor revisela e intente nuevamente.";
          break;
        default:
          customMessage =
            "Ha ocurrido un error. Por favor intentelo más tarde nuevamente.";
      }
      Swal.fire({
        title: `${customMessage}`,
        background: "#FAFAFA",
        color: "#025951",
        iconColor: "#DC143C",
        icon: "error",
        width: "36em",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#038C7F",
      });
    }
  };

  return {
    isRegistered,
    setIsRegistered,
    signUpEmail,
    signInEmail,
    showPassword,
    togglePasswordVisibility,
  };
};
