import React from "react";
import ClockIcon from "../svgIcons/ClockIcon";
import LocationIcon from "../svgIcons/LocationIcon";

const CardInscripcion = ({ data }) => {
  return (
    <div className="w-full bg-White rounded-xl shadow-lg p-3 mb-3">
      <div className="flex justify-start items-center py-3">
        <ClockIcon with={"25px"} height={"25px"} />
        <p className="font-bold ps-3 text-Violet">{data.hora}</p>
      </div>
      <h2 className="font-semiBold pb-3">{data.descripcion}</h2>
      <div className="flex justify-center items-center py-3">
        <LocationIcon with={"25px"} height={"25px"} />
        <p className="font-bold ps-3 text-Violet">{data.ubicacion}</p>
      </div>
    </div>
  );
};

export default CardInscripcion;
