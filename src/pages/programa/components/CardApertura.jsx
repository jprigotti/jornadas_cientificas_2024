import React from 'react';

const CardApertura = ({ data }) => {
  return (
    <div className="card apertura">
      <h2>{data.descripcion}</h2>
      <p><strong>Categoría:</strong> {data.categoria}</p>
      <p><strong>Día:</strong> {data.dia}</p>
      <p><strong>Hora:</strong> {data.hora}</p>
      <p><strong>Ubicación:</strong> {data.ubicacion}</p>
    </div>
  );
};

export default CardApertura;