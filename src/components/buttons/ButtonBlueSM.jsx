import React from "react";

const ButtonVioletSM = ({ onClick, label, type = "button" }) => {
  return (
    <button
      type={type} // Set the button type here
      className="w-[100px] text-lg font-semiBol px-5 py-1 bg-LightBlue text-White rounded-full hover:bg-Blue hover:shadow-lg transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonVioletSM;
