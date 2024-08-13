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
        <div className='flex flex-col'>
            {(userRegistration) ?
                (
                    <div>
                        <p>Inscripcion: {userRegistration.status}</p>
                        <p>Pago del arancel: {userRegistration.payment}</p>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => handleRegistration(userId)}>
                            Inscribirme
                        </button>
                    </div>
                )}
            <div>
                <button onClick={() => handlePayment(userId)}>Confirmar pago</button>
            </div>
        </div>
    )
}

export default Registration
