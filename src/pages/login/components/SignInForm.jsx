import React from "react";
import { useLogin } from "../hooks/useLogin";

const SignInForm = () => {
  const { signInEmail } = useLogin();
  return (
    <div className="w-1/4 bg-Blue rounded-xl p-3">
      <form onSubmit={signInEmail}>
        <div>
          <input
            type="email"
            name="email"
            className="w-full px-2 py-2 mb-2"
            placeholder="Correo electrónico"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="w-full px-2 py-2 mb-5"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="w-full flex justify-center text-White">
          <button
            className="flex items-center text-xl font-semiBold px-5 py-2 bg-PauGreenLight text-White rounded-md hover:bg-PauGreenDark hover:shadow-lg transition duration-300 ease-in-out"
            type={"submit"}
            label={"Registarse"}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
