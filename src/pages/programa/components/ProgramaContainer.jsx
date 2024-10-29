import React from "react";
import { programa } from "./programa";
import CardMesaRedonda from "./CardMesaRedonda";
import CardInscripcion from "./CardInscripcion";
import { usePrograma } from "../hooks/usePrograma";
import CardApertura from "./CardApertura";

const ProgramaContainer = () => {
  const { calendario, ordenarPrograma } = usePrograma();

  const programaOrdenado = ordenarPrograma(programa);

  return (
    <div className="p-20">
      <div className="w-full rounded-tl-xl rounded-tr-xl bg-PauGreenLight laptop1:p-10 ">
        {programaOrdenado.map((item, index) =>
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
