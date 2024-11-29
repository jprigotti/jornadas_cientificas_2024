import { useGenerateDiploma } from "../hooks/useGenerateDiploma";
import { useRegistration } from "../hooks/useRegistration";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

const Certificates = () => {
  const { user } = useAuth();
  const { userData } = useProfile(user.uid);
  const { userRegistration, isSubmitting } =
    useRegistration();
  const { generatePDF } = useGenerateDiploma()


  return (
    <div className="laptop1:ms-40 bg-White flex flex-col items-center py-10 px-3">
      <div className="w-full bg-white rounded-lg shadow-lightShadowGrey max-w-[600px]">
        <div className="w-full bg-LightGreen text-White p-5 font-semiBold rounded-lg flex justify-start items-center">
          {/* <WarningIcon width={"40px"} height={"40px"} /> */}
          <h1 className="text-xl ps-5">Mis certificados</h1>
        </div>
        <div className="flex">
          <p>Certificado de participación: </p>

          {userRegistration?.payment != "paid" && (
            <p>No puede descargar Certificado</p>
          )}
          {userRegistration?.payment == "paid" && (
            < button onClick={() => generatePDF(userData)}>Descargar Certificado</button>
          )}
        </div>
      </div>
    </div >
  );
};

export default Certificates;
