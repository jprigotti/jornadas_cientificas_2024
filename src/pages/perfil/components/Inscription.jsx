import React, { useState, useEffect } from 'react'
import { useInscription } from '../hooks/useInscription'

const Inscription = ({ userId }) => {
    const { loading, userInscription, handleInscription } = useInscription(userId);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {(userInscription) ?
                (
                    <div>
                        <p>Inscripcion: {userInscription.status}</p>
                        <p>Pago del arancel: {userInscription.payment}</p>
                    </div>
                ) :
                (
                    <div>
                        <button onClick={() => handleInscription(userId)}>
                            Inscribirme
                        </button>
                    </div>
                )}

        </div>
    )
}

export default Inscription
