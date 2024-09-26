import React from "react";
import OradoresCarousel from "./OradoresCarousel";

const Conferencias = () => {
  return (
    <section className="laptop1:ms-40 relative">
      <div
        className="relative w-full h-[500px]"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/conferencias_background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <h2 className="main-title text-center text-White pt-5 relative z-20">
          Conferencias Centrales
        </h2>
        <OradoresCarousel />
      </div>
    </section>
  );
};


export default Conferencias;
