// Card.js
import React from 'react';

const CardMesaRedonda = ({ data }) => {
    return (
        <div className="pb-10">
            <h2>{data.titulo}</h2>
            <p>Categoría: {data.categoria}</p>
            <p>Día: {data.dia}</p>
            <p>Hora: {data.hora}</p>
            <p>Ubicación: {data.ubicacion}</p>

            <h3>Presidente:</h3>
            <p>{data.presidente.nombre} - {data.presidente.servicio}</p>

            <h3>{data.secretario.titulo}:</h3>
            {data.secretario.secretarios.map((sec, index) => (
                <p key={index}>{sec.nombre} - {sec.servicio}</p>
            ))}

            <h3>Disertantes:</h3>
            {data.disertantes.map((disertante, index) => (
                <div key={index}>
                    <p>{disertante.nombre} - {disertante.servicio}</p>
                    {disertante.tema && <p>Tema: {disertante.tema}</p>}
                </div>
            ))}
        </div>
    );
};

export default CardMesaRedonda;
