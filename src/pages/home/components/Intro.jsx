import React from "react";
import "../../../App.css";
import CamaraIcon from "../../../components/navbar/components/svgIcons/CamaraIcon";

const Intro = () => {
  return (
    <section className="laptop1:ms-40 bg-White flex flex-col items-center mt-3 rounded-tl-xl">
      <div className="container outer-container">
        <div className="bg-PauGreenLight flex flex-col items-center rounded-tl-xl rounded-br-xl">
          <h2 className="text-3xl text-White font-bold text-center p-5">
            Mensaje de la presidenta
          </h2>
        </div>
        <div className="w-full laptop1:w-3/4 m-auto inner-container">
          <div class="font-poppins space-y-4 pb-10">
            <p className="text-indent indent-6 text-justify">
              Les damos la bienvenida a esta nueva edición de las jornadas
              científicas del Hospital Santojanni y CESACs del área
              programática.
            </p>
            <p className="text-indent indent-6 text-justify">
              Nos reunimos con el propósito de compartir conocimientos, discutir
              avances y explorar nuevas perspectivas en el campo de la Medicina
              y la Salud Pública. Estas jornadas son una oportunidad para
              fortalecer la colaboración entre profesionales de la salud,
              investigadores y académicos, con el objetivo de mejorar los
              estándares de atención y promover la innovación en nuestros
              procesos.
            </p>
            <p className="text-indent indent-6 text-justify">
              Estoy segura de que estos días estarán llenos de intercambios
              enriquecedores y descubrimientos valiosos que contribuirán
              significativamente a nuestro saber.
            </p>

            <p className="text-indent indent-6 text-justify">
              Muchas gracias y bienvenidos.
            </p>
          </div>

          <div className="flex items-center flex justify-center tablet:justify-start flex-wrap pb-20">
            <img
              className="rounded-full w-[150px]"
              src="/images/presidenta.png"
              alt="Presidenta Jornadas"
            />
            <div className="ps-10 flex flex-col items-center">
              <img className="w-[150px]" src="/images/signature.png" alt="" />
              <p>Presidenta XXXIX Jornadas Científicas</p>
              <p>Dra. María Vivona</p>
            </div>
          </div>

          <div className="flex items-center flex justify-center">
            <button className="flex items-center text-xl font-bold px-10 py-5 bg-LightViolet text-White rounded-md hover:bg-Violet hover:shadow-lg transition duration-300 ease-in-out">
              <span className="pe-5">
                <CamaraIcon width="25px" height="25px" />
              </span>
              Ver video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
