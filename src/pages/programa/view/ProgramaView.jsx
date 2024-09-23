import React from "react";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";

const ProgramaView = () => {
  return (
    <div>
      <PagesBannerView title={"Programa"} />
      <section className="mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3 laptop1:ms-40">
        <p className="p-52">Proximamente</p>
      </section>
    </div>
  );
};

export default ProgramaView;
