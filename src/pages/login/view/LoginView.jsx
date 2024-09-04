import React from "react";
import { useLogin } from "../hooks/useLogin";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";

const LoginView = () => {
  const { isRegistered, setIsRegistered } = useLogin();

  return (
    <div>
      <PagesBannerView title="Ingresar" />
      <section className="mt-3 py-10 px-5 rounded-tl-xl bg-White flex flex-col items-center laptop1:ms-40">
        {isRegistered ? (
          <div className="w-full">
            <SignInForm />
            <div className="pt-5">
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
