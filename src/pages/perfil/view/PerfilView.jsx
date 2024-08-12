import React, { useState, useEffect } from 'react'
import UserProfile from '../components/UserProfile';
import { useAuth } from '../../../core/auth/hooks/useAuth'
import Inscription from '../components/Inscription';

const PerfilView = () => {
    const { user } = useAuth();

    return (
        <>
            <UserProfile userId={user.uid} />
            <Inscription userId={user.uid} />
        </>
    )
}

export default PerfilView


{/* <p>Este es el perfil de {user.email}</p>
            <p>User ID is {user.uid}</p> */}