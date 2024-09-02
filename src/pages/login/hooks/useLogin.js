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

  /**
   * signUpEmail recibo el formData y ejecuta dos acciones:
   * 1. crea el user en firebase
   * 2. crea el user en firestore
   */
  const signUpEmail = async (formData) => {
    const response = {
      status: null,
      error: null,
      data: null,
    };

    try {
      //Creamos el user en Firebase
      const responseSignUp = await signUpWithEmail(
        formData.email,
        formData.password
      );
      // console.log("Registration response: ", responseSignUp.user);

      const user = { ...formData, role: "user" };
      const responseSaveUserInDB = await saveUserInDB(
        responseSignUp.user.uid,
        user
      );
      // console.log("Save user in DB response: ", responseSaveUserInDB);
      if (responseSaveUserInDB.status) {
        response.status = true;
        response.data = responseSignUp.user.email;
      } else {
        response.status = false;
        response.error = responseSaveUserInDB.error;
      }
    } catch (error) {
      // console.log("Registration error: ", error);
      response.status = false;
      response.error = error;
    }
    return response;
  };

  const signInEmail = async (event) => {
    event.preventDefault();

    try {
      const form = new FormData(event.target);
      const { email, password } = Object.fromEntries(form.entries());
      const response = await signInWithEmail(email, password);
      // console.log("Email verified? : ", response.user.emailVerified);
      if (response.user.emailVerified) {
        Swal.fire({
          title: `Bienvenido ${response.user.email} !`,
          background: "#FAFAFA",
          color: "#025951",
          iconColor: "#025951",
          icon: "success",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#038C7F",
        });
        navigate("/perfil");
      } else {
        Swal.fire({
          title: `Atención!`,
          text: `Su email aún no ha sido verificado. Revise por favor su correo electronico ${response.user.email}, bandeja de entrada o correo no deseado (spam)`,
          background: "#FAFAFA",
          color: "#025951",
          iconColor: "#FFA500",
          icon: "warning",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#038C7F",
        });
      }
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
