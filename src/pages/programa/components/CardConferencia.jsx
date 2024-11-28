// Card.js
import React from "react";
import ClockIcon from "../svgIcons/ClockIcon";
import LocationIcon from "../svgIcons/LocationIcon";
import { usePrograma } from "../hooks/usePrograma";
import PlayIcon from "../../home/components/conferencias/PlayIcon";

const CardConferencia = ({ data }) => {
  const { categorias } = usePrograma();

  return (
    <div className="w-full bg-White rounded-xl shadow-lg p-3 mb-3">
      <div className="flex justify-start items-center py-3">
        <ClockIcon with={"25px"} height={"25px"} />
        <p className="font-bold ps-3 text-PauGreenDark">{data.hora}</p>
      </div>

      <h2 className="pb-2 font-semiBold text-PauGreenDark">{categorias[data.categoria]}</h2>

      <h2 className="font-semiBold pb-3">{data.titulo}</h2>

      <h3 className="font-semiBold pt-2 pb-1">Orador:</h3>
      <p className="pb-5">{data.orador}</p>

      <div className="flex justify-center items-center py-3">
        <LocationIcon with={"25px"} height={"25px"} />
        <p className="font-bold ps-1 text-Violet">{data.ubicacion}</p>
      </div>
      {data.isStreaming && (
        <div className="flex flex-col justify-center items-center py-3">
          <a
            href={data.linkStreaming}
            className="font-bold ps-3 text-Violet flex flex-col items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayIcon width={"50px"} height={"50px"} fill={"#584ba0"} />
          </a>
          <p className="font-bold ps-3 text-White">
            <span className="bg-Violet p-2 rounded-sm">Miralo en vivo por YouTube</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CardConferencia;
