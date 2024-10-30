// Card.js
import React from "react";
import ClockIcon from "../svgIcons/ClockIcon";
import LocationIcon from "../svgIcons/LocationIcon";

const CardMesaRedonda = ({ data }) => {
  return (
    <div className="w-full bg-White rounded-xl shadow-lg p-3 mb-3">
      <div className="flex justify-start items-center py-3">
        <ClockIcon with={"25px"} height={"25px"} />
        <p className="font-bold ps-3 text-Violet">{data.hora}</p>
      </div>
      <h2 className="font-semiBold pb-3">{data.titulo}</h2>

      <h3 className="font-semiBold pt-2 pb-1">Presidente:</h3>
      <p>
        {data.presidente.nombre} - {data.presidente.servicio}
      </p>

      <h3 className="font-semiBold pt-2 pb-1">{data.secretario.titulo}:</h3>
      {data.secretario.secretarios.map((sec, index) => (
        <p key={index}>
          {sec.nombre} - {sec.servicio}
        </p>
      ))}

      <h3 className="font-semiBold pt-2 pb-1">Disertantes:</h3>
      {data.disertantes.map((disertante, index) => (
        <div className="pb-2"key={index}>
          <p>
            {disertante.nombre} - {disertante.servicio}
          </p>
          {disertante.tema && <p>Tema: {disertante.tema}</p>}
        </div>
      ))}

      <div className="flex justify-center items-center py-3">
        <LocationIcon with={"25px"} height={"25px"} />
        <p className="font-bold ps-1 text-Violet">{data.ubicacion}</p>
      </div>
    </div>
  );
};

export default CardMesaRedonda;
