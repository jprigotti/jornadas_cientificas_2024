import { useRegistration } from "../hooks/useRegistration";

const Registration = ({ userId }) => {
  const { loading, userRegistration, handleRegistration, isSubmitting } =
    useRegistration(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="laptop1:ms-40 bg-White flex flex-col items-center p-10">
      <div className="w-full bg-white rounded-lg shadow-lightShadowGrey">
        <div className="w-full bg-Blue text-White p-2 font-semiBold">
          <h1>Jornadas Científicas 2024</h1>
        </div>
        <div className="p-5">
          {userRegistration ? (
            <div>
              <p>Inscripcion: Registrado</p>
              <p>
                Pago del arancel:{" "}
                {userRegistration?.payment == "pending"
                  ? "Pendiente - abonar en AMM"
                  : "Pagado"}
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <button
                className="text-lg font-semiBold px-5 py-2 bg-LightViolet text-White rounded-md hover:bg-Violet hover:shadow-lg transition duration-300 ease-in-out"
                onClick={() => handleRegistration(userId)}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Procesando...' : 'Inscribirme'}
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex flex-col items-start">
        <p>Para poner en el panel del Admin</p>
        {userRegistration?.payment == "paid" ? (
          <p>Pago del arancel: pagado</p>
        ) : (
          <button onClick={() => handlePayment(userId)}>Confirmar pago</button>
        )}
      </div> */}
    </div>
  );
};

export default Registration;
