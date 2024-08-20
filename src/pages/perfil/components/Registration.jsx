import { useRegistration } from '../hooks/useRegistration'

const Registration = ({ userId }) => {
    const { loading,
        userRegistration,
        handleRegistration,
        handlePayment } = useRegistration(userId);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='ms-40  bg-White flex flex-col items-center px-3'>
            <div className='mb-5'>
                {userRegistration ?
                    (
                        <div>
                            <p>Inscripcion: {userRegistration?.status}</p>
                            <p>Pago del arancel: {userRegistration?.payment}</p>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => handleRegistration(userId)}>
                                Inscribirme
                            </button>
                        </div>
                    )}
            </div>

            <div className='flex flex-col items-start'>
                <p>Para poner en el panel del Admin</p>
                {userRegistration?.payment == "paid"
                    ? <p>Pago del arancel: pagado</p>
                    : <button onClick={() => handlePayment(userId)}>Confirmar pago</button>
                }
            </div>
        </div>
    )
}

export default Registration
