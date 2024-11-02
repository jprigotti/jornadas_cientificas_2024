import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Autoridades from "../components/Autoridades";
import Invitados from "../components/invitados/Invitados";
import Conferencias from "../components/conferencias/Conferencias";
import Colaboran from "../components/Colaboran";
import JornadasNumeros from "../components/jorndasNumeros/JornadasNumeros";

const HomeView = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll al top de la página
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  return (
    <div>
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
