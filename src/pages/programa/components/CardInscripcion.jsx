import React from 'react';

const CardInscripcion = ({ data }) => {
  return (
    <div className="pb-10">
      <h2>{data.descripcion}</h2>
      <p><strong>Categoría:</strong> {data.categoria}</p>
      <p><strong>Día:</strong> {data.dia}</p>
      <p><strong>Hora:</strong> {data.hora}</p>
      <p><strong>Ubicación:</strong> {data.ubicacion}</p>
    </div>
  );
};

export default CardInscripcion;