import { useRegistration } from "../hooks/useRegistration";

const Certificates = () => {
  const { userRegistration, handleRegistration, isSubmitting } =
    useRegistration();

  return (
    <div className="laptop1:ms-40 bg-White flex flex-col items-center py-10 px-3">
      <div className="w-full bg-white rounded-lg shadow-lightShadowGrey max-w-[600px]">
        <div className="w-full bg-LightGreen text-White p-5 font-semiBold rounded-lg flex justify-start items-center">
          {/* <WarningIcon width={"40px"} height={"40px"} /> */}
          <h1 className="text-xl ps-5">Mis certificados</h1>
        </div>
        <div>
          <p className="py-10 px-5 text-center">Desde aquí podrás descargar tus certificados</p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
