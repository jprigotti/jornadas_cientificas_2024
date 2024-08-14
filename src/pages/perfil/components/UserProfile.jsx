import React from 'react'
import { useProfile } from '../hooks/useProfile';

const UserProfile = ({ userId }) => {
    const { loading, userData } = useProfile(userId)

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Datos del usuario:</h1>
            <p>Nombre: {userData?.name}</p>
            <p>Apellido: {userData?.lastName}</p>
            <p>Cell: {userData?.cell}</p>
            <p>Categoría: {userData?.category}</p>
            <p>Email: {userData?.email}</p>

            {/* Show more user information */}
        </div>
    )
}

export default UserProfile
