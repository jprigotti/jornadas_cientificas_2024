import React from 'react'
import { useAuth } from '../../../core/auth/hooks/useAuth'

const PerfilView = () => {
    const { user } = useAuth();

    return (
        <div>
            <p>Este es el perfil de {user.email}</p>
        </div>
    )
}

export default PerfilView
