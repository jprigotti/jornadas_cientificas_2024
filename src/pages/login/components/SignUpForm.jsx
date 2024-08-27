import React from "react";
import { useLogin } from "../hooks/useLogin";
import { useSignUpForm } from "../hooks/useSignUpForm";

const SignUpForm = () => {
  const { signUpEmail } = useLogin();
  const { formData, handleChange, handleSubmit, errors } = useSignUpForm();

  return (
    <div className="w-full bg-Blue rounded-xl p-3 tablet:w-1/2 laptop1:w-1/4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label className="text-White pb-2">Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`rounded shadow appearance-none px-5 py-2 mb-1 focus:outline-none focus:shadow-lightShadow ${
              errors.name && "focus:outline border border-Red"
            }`}
          />
          {errors.name && (
            <span className="text-sm text-Red">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-White pb-2">Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`rounded shadow appearance-none px-5 py-2 mb-1 focus:outline-none focus:shadow-lightShadow ${
              errors.lastName && "focus:outline border border-Red"
            }`}
          />
          {errors.lastName && (
            <span className="text-sm text-Red">{errors.lastName}</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-White pb-2">Celular:</label>
          <input
            type="text"
            name="cell"
            value={formData.cell}
            onChange={handleChange}
            className={`rounded shadow appearance-none px-5 py-2 mb-1 focus:outline-none focus:shadow-lightShadow ${
              errors.cell && "focus:outline border border-Red"
            }`}
          />
          {errors.cell && (
            <span className="text-sm text-Red">{errors.cell}</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-White pb-2">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`rounded shadow appearance-none px-5 py-2 mb-1 focus:outline-none focus:shadow-lightShadow ${
              errors.email && "focus:outline border border-Red"
            }`}
          />
          {errors.email && (
            <span className="text-sm text-Red">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-White pb-2">Categoría:</label>
          <select
            name="category"
            value={formData.category} // Assuming you have state in your formData
            onChange={handleChange}
            className={`rounded shadow appearance-none px-5 py-2 mb-1 focus:outline-none focus:shadow-lightShadow ${
              errors.category && "focus:outline border border-Red"
            }`}
          >
            <option value="">Seleccione...</option> {/* Placeholder option */}
            <option value="medico">Médico</option>
            <option value="residente">Residente</option>
            <option value="estudiante">Estudiante</option>
          </select>
          {errors.category && (
            <span className="text-sm text-Red">{errors.category}</span>
          )}
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-White pb-2">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`rounded shadow appearance-none px-5 py-2 mb-1 focus:outline-none focus:shadow-lightShadow ${
              errors.password && "focus:outline border border-Red"
            }`}
          />
          {errors.password && (
            <span className="text-sm text-Red">{errors.password}</span>
          )}
        </div>
        <div className="w-full flex justify-center">
          <button
            className="flex items-center text-xl font-semiBold px-5 py-2 bg-PauGreenLight text-White rounded-md hover:bg-PauGreenDark hover:shadow-lg transition duration-300 ease-in-out"
            type="submit"
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
