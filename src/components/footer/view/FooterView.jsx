import React from "react";

const FooterView = () => {
  return (
    <div className="py-10 bg-PauBaseComponents laptop1:ms-40">
      {/* Thin line on top */}
      <div className="w-full border-t-8 border-Green mb-5" />

      <div className="flex flex-col laptop1:flex-row laptop1:justify-between laptop1:items-center">
        {/* Logo */}
        <div className="p-10">
          <img
            className="h-[80px]"
            src="/images/logo_jornadas.png"
            alt="Logo jornadas"
          />
        </div>

        {/* Contact Information */}
        <div className="text-center text-white p-10">
          <p>Pilar 950 CABA</p>
          <p>4630-5500</p>
          <p>
            <a
              href="mailto:santojanni.jornadas@gmail.com"
              className="text-blue-400 hover:underline"
            >
              santojanni.jornadas@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
