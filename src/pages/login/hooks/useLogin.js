import React, { useState } from "react";
import {
    signInWithEmail,
    signUpWithEmail,
} from "../../../services/firebase.services"

import { useHooks } from "../../../hooks/useHooks";

export const useLogin = () => {
    const [isRegistered, setIsRegistered] = useState(true);

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
            console.log("Login response: ", response.user.accessToken)
            setCookie('access_token', response.user.accessToken)
        } catch (error) {
            console.log("Login error: ", error)
        }
    }


    // Function to set a cookie
    const setCookie = (name, value) => {
        const d = new Date();
        const days = 1;
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    return {
        isRegistered,
        setIsRegistered,
        signUpEmail,
        signInEmail
    };
}



