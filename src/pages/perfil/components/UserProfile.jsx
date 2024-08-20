import React from 'react'
import { useProfile } from '../hooks/useProfile';

const UserProfile = ({ userId }) => {
    const { loading, userData } = useProfile(userId)

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='ms-40 mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3'>
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
