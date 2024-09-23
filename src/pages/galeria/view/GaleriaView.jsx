import React from "react";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";

const GaleriaView = () => {
  return (
    <div>
      <PagesBannerView title={"Registro multimedia"} />
      <section className="mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3 laptop1:ms-40">
        <p className="p-10">Asi vivimos las Jornadas 2023</p>
        <div className="w-[350px] h-[200px] tablet:w-[700px] tablet:h-[400px] laptop1:w-[850px] laptop1:h-[480px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/U3UP9GNJC6c"
            title="Tour Virtual Jornadas Científicas 2023 - Hospital Santojanni"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default GaleriaView;
