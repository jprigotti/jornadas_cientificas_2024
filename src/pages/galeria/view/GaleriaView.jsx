import React from "react";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";

const GaleriaView = () => {
  return (
    <div>
      <PagesBannerView title={"Registro multimedia"} />
      <section className="ms-40 mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3">
        <p className="p-52">Asi vivimos las Jornadas</p>
      </section>
    </div>
  );
};

export default GaleriaView;
