import React from "react";

const InvitadosCard = ({ invitado }) => {
  return (
    <div className="my-10 flex justify-center">
      <div className="w-[250px] flex flex-col items-center bg-CardGrayLight ">
        <img
          className="rounded-full w-[150px] h-[150px] mt-5"
          src={invitado.image}
          alt=""
        />
        <div className="p-2">
          <p className="text-center font-semiBold py-5">{invitado.name}</p>
          <p className="text-center py-2">{invitado.cv1}</p>
        </div>
      </div>
    </div>
  );
};

export default InvitadosCard;
