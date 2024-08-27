import React from "react";
import { useNavigate } from "react-router-dom";
import { useCountdown } from "../hooks/useCountdown";

const Banner = () => {
  const navigate = useNavigate();
  const { timeLeft } = useCountdown();

  const handleInscripcion = () => {
    navigate("/perfil");
  };

  return (
    <div className="relative h-screen w-full laptop1:ps-40">
      {/* Background Video */}
      {/* <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/image_banner.JPG" alt="imagen banner">
            </img> */}

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/video_banner.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-Black bg-opacity-65"></div>

      {/* Titles */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-White  text-4xl font-bold laptop1:text-6xl">
          XXXIX JORNADAS
        </h1>
        <h1 className="text-center text-White  text-4xl font-bold laptop1:text-6xl">
          CIENTIFICAS
        </h1>
        <h1 className="text-center text-White text-3xl font-semibold pb-10 laptop1:text-5xl">
          HOSPITAL SANTOJANNI
        </h1>
        <h2 className="text-White text-3xl md:text-3xl font-bold pb-10">
          8 al 15 de noviembre
        </h2>
        <h2 className="text-White text-center text-2xl  font-bold laptop1:text-5xl">
          Estrategias para abordar los retos actuales en salud:
        </h2>
        <h2 className="text-White text-2xl  font-bold mb-10 laptop1:text-5xl">
          Rol del sistema público
        </h2>
        {/* Countdown box */}
        <div className="flex pb-10 space-x-3">
          <div className="w-[70px] h-[70px] flex flex-col items-center justify-center rounded-full shadow-lightShadowGrey bg-White bg-opacity-30 text-White">
            <p className="text-lg">{timeLeft.dias}</p>
            <p className="text-xs">dias</p>
          </div>
          <div className="w-[70px] h-[70px] flex flex-col items-center justify-center rounded-full shadow-lightShadowGrey bg-White bg-opacity-30 text-White">
            <p className="text-lg">{timeLeft.horas}</p>
            <p className="text-xs">horas</p>
          </div>
          <div className="w-[70px] h-[70px] flex flex-col items-center justify-center rounded-full shadow-lightShadowGrey bg-White bg-opacity-30 text-White">
            <p className="text-lg">{timeLeft.minutos}</p>
            <p className="text-xs">minutos</p>
          </div>
          <div className="w-[70px] h-[70px] flex flex-col items-center justify-center rounded-full shadow-lightShadowGrey bg-White bg-opacity-30 text-White">
            <p className="text-lg">{timeLeft.segundos}</p>
            <p className="text-xs">segundos</p>
          </div>
        </div>

        <div>
          <button
            className="text-xl font-bold px-10 py-5 bg-LightViolet text-White rounded-full hover:bg-Violet hover:shadow-lg transition duration-300 ease-in-out"
            onClick={handleInscripcion}
          >
            Incribirme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
