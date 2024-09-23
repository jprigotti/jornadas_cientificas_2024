import React from "react";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Autoridades from "../components/Autoridades";
import Invitados from "../components/invitados/Invitados";
import Conferencias from "../components/Conferencias";
import Streaming from "../components/Streaming";
import Colaboran from "../components/Colaboran";
import JornadasNumeros from "../components/JornadasNumeros";

const HomeView = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <JornadasNumeros />
      <Autoridades />
      <Invitados />
      {/* <Conferencias /> */}
      {/* <Streaming /> */}
      <Colaboran />
    </div>
  );
};

export default HomeView;
