import React from "react";
import InvitadosCarousel from "./InvitadosCarousel";

const Invitados = () => {
  return (
    <section className="bg-White pt-16 laptop1:ms-40 ">
      <div>
        <h2 className="main-title text-center">Invitados especiales</h2>
      </div>
      <InvitadosCarousel />
    </section>
  );
};

export default Invitados;

// <section className="bg-White py-10 laptop1:ms-40">
//   <div className="">
//     <h2 className="main-title text-center pb-10">Inviados especiales</h2>
//   </div>
//   <div className="w-full tablet:w-3/4 m-auto">
//     <InvitadosCarousel />
//   </div>
// </section>
