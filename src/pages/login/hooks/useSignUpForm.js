import React, { useState } from "react";
import { useLogin } from "./useLogin";
import Swal from "sweetalert2"

export const useSignUpForm = () => {
    const { signUpEmail } = useLogin();

    // hook state declaration
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        dni: '',
        cell: '',
        email: '',
        category: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // console.log('Form data:', formData);
            const signUpEmailResponse = await signUpEmail(formData)
            console.log("signUpEmailResponse is: ", signUpEmailResponse)
        } else {
            setErrors(formErrors);
            console.log('Errors');
        }
    };


    const validate = () => {
        let formErrors = {};

        if (!formData.name) {
            formErrors.name = 'Nombre es requerido';
        }
        if (!formData.lastName) {
            formErrors.lastName = 'Apellido es requerido';
        }
        if (!formData.cell) {
            formErrors.dni = 'DNI es requerido';
        }
        if (!formData.cell) {
            formErrors.cell = 'Celular es requerido';
        }

        if (!formData.email) {
            formErrors.email = 'Email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }

        if (!formData.category) {
            formErrors.category = 'Categoría es requerido';
        }

        if (!formData.password) {
            formErrors.password = 'Contraseña es requerida';
        } else if (formData.password.length < 6) {
            formErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
        return formErrors;
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        errors
    }
}