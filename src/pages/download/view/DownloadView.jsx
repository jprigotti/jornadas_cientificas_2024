import React from "react";
import PagesBannerView from "../../../components/pagesBanner/view/PagesBannerView";
import Table from "../components/Table"

const DownloadView = () => {
  return (
    <div>
      <PagesBannerView title="Descargas" />
      <section className=" mt-3 py-10 px-2 rounded-tl-xl bg-White flex flex-col items-center laptop1:ms-40">
        <Table />
      </section>
    </div>
  );
};

export default DownloadView;
