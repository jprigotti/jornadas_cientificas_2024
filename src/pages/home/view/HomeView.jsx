import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Autoridades from "../components/Autoridades";
import Invitados from "../components/invitados/Invitados";
import Conferencias from "../components/conferencias/Conferencias";
import Colaboran from "../components/Colaboran";
import JornadasNumeros from "../components/jorndasNumeros/JornadasNumeros";
import PlayIcon from "../components/conferencias/PlayIcon";

const HomeView = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al top de la página al cargar
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Popup que se muestra al cargar la página */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-White rounded-lg p-6 w-80 laptop1:w-96 text-center shadow-lg relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-Violet hover:text-LightViolet font-bold text-lg"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4 text-Violet">¡Seguí las jornadas en vivo!</h2>
            <a
              href="https://youtube.com/live/Y78Ne3PrAWQ" // Reemplaza con tu enlace de YouTube
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              {/* <PlayIcon width={"50px"} height={"50px"} fill={"#7b4ba0"} /> */}
              <PlayIcon width={"50px"} height={"50px"} fill={"#584ba0"}/>
              <span className="mt-2 font-bold text-2xl py-2 text-White bg-Violet">Sumate!</span>
            </a>
          </div>
        </div>
      )}

      {/* Contenido de la página */}
      <Banner />
      <Intro />
      <JornadasNumeros />
      <Autoridades />
      <Invitados />
      <Conferencias />
      <Colaboran />
    </div>
  );
};

export default HomeView;

