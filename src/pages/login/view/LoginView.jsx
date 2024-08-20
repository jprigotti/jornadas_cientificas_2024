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
      <section className="ms-40 mt-3 py-10 rounded-tl-xl bg-White flex flex-col items-center">
        {isRegistered ? <SignInForm /> : <SignUpForm />}

        {isRegistered ? (
          <span>
            No tenes cuenta?
            <button
              className="ps-1 pt-3"
              onClick={() => setIsRegistered(!isRegistered)}
            >
              Click aquí para registrarse
            </button>
          </span>
        ) : (
          <span>
            Tenes una cuenta?{" "}
            <button
              className="ps-1 pt-3"
              onClick={() => setIsRegistered(!isRegistered)}
            >
              Click aquí para ingresar.
            </button>
          </span>
        )}
      </section>
    </div>
  );
};

export default LoginView;
