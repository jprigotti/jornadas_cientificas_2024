import React, { useState, useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";
import ForgotPassword from "../components/ForgotPassword";

const LoginView = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al top de la página
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  const { isRegistered, setIsRegistered } = useLogin();
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div>
      <PagesBannerView title="Ingresar" />
      <section className="mt-3 py-10 px-5 rounded-tl-xl bg-White flex flex-col items-center laptop1:ms-40">
        {isRegistered ? (
          <div className="w-full">
            {!forgotPassword ? <SignInForm /> : <ForgotPassword />}
            <div className="pt-5">
              {/* switch registracion */}
              <div>
                <p className="text-center">
                  No tenes cuenta?
                  <span>
                    <button
                      className="ps-2"
                      onClick={() => setIsRegistered(!isRegistered)}
                    >
                      Click <strong>aquí</strong> para registrarse
                    </button>
                  </span>
                </p>
              </div>
              {/* Switch login */}
              <div className="pt-5">
                <p className="text-center">
                  {!forgotPassword ? <p>Olvidaste tu contraseña</p> : <p></p>}
                  <span>
                    <button
                      className="ps-2"
                      onClick={() => setForgotPassword(!forgotPassword)}
                    >
                      {!forgotPassword ? (
                        <p>
                          {" "}
                          Click <strong>aquí</strong> para recuperar la
                          contraseña
                        </p>
                      ) : (
                        <p>
                          {" "}
                          Click <strong>aquí</strong> para iniciar sesión
                        </p>
                      )}
                    </button>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <SignUpForm />
            <div className="pt-5">
              <p className="text-center">
                Tenes cuenta?
                <span>
                  <button
                    className="ps-2"
                    onClick={() => setIsRegistered(!isRegistered)}
                  >
                    Click <strong>aquí</strong> para ingresar
                  </button>
                </span>
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default LoginView;
