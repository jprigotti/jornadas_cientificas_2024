import React from "react";

const ComisionCard = ({ comite }) => {
  const presidente = `${
    comite.presidenteGenero == "Dra." ? "Presidenta" : "Presidente"
  } ${comite.presidenteGenero} ${comite.presidenteNombre}`;
  const secretario = `${
    comite.secretarioGenero == "Dra." ? "Secretaria" : "Secretario"
  } ${comite.secretarioGenero} ${comite.secretarioNombre}`;
  const vocales = comite.vocales;
  return (
    <div className="rounded-lg m-5 shadow-lightShadowGrey">
      <p className="rounded-lg text-center pt-3 font-semiBold text-lg bg-gradient-to-b from-PauBackground via-White to-White text-white">
        {comite.comiteNombre}
      </p>
      <div className="p-3">
        <p>{presidente}</p>
        <p>{secretario}</p>
        <p>Vocales:</p>
        {vocales.map((vocal) => (
          <p className="ps-2">{`${
            vocal.genero == "Dra." ? "Dra." : vocal.genero
          } ${vocal.nombre}`}</p>
        ))}
      </div>
    </div>
  );
};

export default ComisionCard;
