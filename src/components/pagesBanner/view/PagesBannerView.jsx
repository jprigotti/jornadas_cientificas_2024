import React from "react";

const PagesBannerView = ({ title }) => {
  return (
    <div
      className="relative h-[300px] w-full ps-40
     bg-cover bg-bottom"
      style={{ backgroundImage: "url('/images/pages_banner_background.jpg')" }}
    ></div>
  );
};

export default PagesBannerView;
