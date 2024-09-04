import React from "react";
import "../../../App.css";
import CamaraIcon from "../../../components/navbar/components/svgIcons/CamaraIcon";
import Swal from "sweetalert2";

const Intro = () => {
  const handlePlayVideo = () => {
    Swal.fire({
      title: "Palabras de bienvenida",
      html: `
      <div style="width: 100%; display: flex; justify-content: center;">
        <iframe style="width: 100%; height: 120%;" src="https://www.youtube.com/embed/sqkDnY4ygKs" 
        title="XXXIX Jornadas Científicas Hospital Santojanni | Palabras de bienvenida - 2024" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <section className=" bg-White rounded-tl-xl mt-3 laptop1:ms-40">
      <div className="px-2 pt-10">
        <h2 className="main-title text-center py-5">
          Mensaje de la presidenta
        </h2>

        <div className="w-full laptop1:w-3/4 m-auto">
          <div class="font-poppins space-y-4 pb-10">
            <p className="text-indent indent-6 text-justify font-poppins text-[14px] laptop1:text-[18px]">
              Les damos la bienvenida a esta nueva edición de las jornadas
              científicas del Hospital Santojanni y CESACs del área
              programática.
            </p>
            <p className="text-indent indent-6 text-justify font-poppins text-[14px] laptop1:text-[18px]">
              Nos reunimos con el propósito de compartir conocimientos, discutir
              avances y explorar nuevas perspectivas en el campo de la Medicina
              y la Salud Pública. Estas jornadas son una oportunidad para
              fortalecer la colaboración entre profesionales de la salud,
              investigadores y académicos, con el objetivo de mejorar los
              estándares de atención y promover la innovación en nuestros
              procesos.
            </p>
            <p className="text-indent indent-6 text-justify font-poppins text-[14px] laptop1:text-[18px]">
              Estoy segura de que estos días estarán llenos de intercambios
              enriquecedores y descubrimientos valiosos que contribuirán
              significativamente a nuestro saber.
            </p>

            <p className="text-indent indent-6 text-justify font-poppins text-[14px] laptop1:text-[18px]">
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

          <div
            className="flex items-center flex justify-center bg-LightViolet text-White rounded-full hover:bg-Violet hover:shadow-lg transition duration-300 ease-in-out w-[250px] m-auto p-2"
            onClick={handlePlayVideo}
          >
            <button className="w-full flex justify-center items-center   ">
              <CamaraIcon width="25px" height="25px" />
              <p className="text-xl font-bold ps-2">Ver video</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
