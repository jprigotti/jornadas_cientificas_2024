import React from "react";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";
import ComisionesContainer from "../components/ComisionesContainer";

const ComisionesView = () => {
  return (
    <div >
      <PagesBannerView title={"Comisiones"} />
      <section className="mt-3 rounded-tl-xl bg-White flex flex-col items-center px-3 laptop1:ms-40">
        <ComisionesContainer />
      </section>
    </div>
  );
};

export default ComisionesView;
