import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import {
    signInWithEmail,
    signUpWithEmail,
} from "../../../services/firebase.services"

export const useLogin = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const navigate = useNavigate();

    const signUpEmail = async (event) => {
        event.preventDefault();

        try {
            const form = new FormData(event.target)
            const { name, lastName, cell, email, password } = Object.fromEntries(form.entries());
            console.log("Form input data: ", name, lastName, cell, email, password);
            const response = await signUpWithEmail(email, password)
            console.log("Registration response: ", response)
        } catch (error) {
            console.log("Registration error: ", error)
        }
    };

    const signInEmail = async (event) => {
        event.preventDefault();

        try {
            const form = new FormData(event.target)
            const { email, password } = Object.fromEntries(form.entries());
            console.log("Form input data: ", email, password);
            const response = await signInWithEmail(email, password)
            console.log("Login response: ", response.user)
            navigate('/perfil');
        } catch (error) {
            console.log("Login error: ", error)
        }
    }


    return {
        isRegistered,
        setIsRegistered,
        signUpEmail,
        signInEmail,
    };
}



