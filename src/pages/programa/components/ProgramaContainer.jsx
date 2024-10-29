import React from "react";

import CardMesaRedonda from "./CardMesaRedonda";
import CardInscripcion from "./CardInscripcion";
import { usePrograma } from "../hooks/usePrograma";
import CardApertura from "./CardApertura";

const ProgramaContainer = () => {
  const { programaFiltrado } = usePrograma();


  return (
    <div className="p-20">
      <div className="w-full rounded-tl-xl rounded-tr-xl bg-PauGreenLight laptop1:p-10 ">
        {programaFiltrado?.map((item, index) =>
          item.categoria == "mesa_redonda" ? (
            <CardMesaRedonda key={index} data={item} />
          ) : item.categoria == "inscripcion" ? (
            <CardInscripcion key={index} data={item} />
          ) : item.categoria == "apertura" ? (
            <CardApertura key={index} data={item} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProgramaContainer;
