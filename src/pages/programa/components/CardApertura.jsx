import React from "react";

const CardApertura = ({ data }) => {
  return (
    <div className="p-2">
      <div className="bg-White w-1/2 rounded-xl p-5">
        <h2>{data.descripcion}</h2>
        <p>{data.dia}</p>
        <p>
          <strong>Hora:</strong> {data.hora}
        </p>
        <p>
          <strong>Ubicación:</strong> {data.ubicacion}
        </p>
      </div>
    </div>
  );
};

export default CardApertura;
