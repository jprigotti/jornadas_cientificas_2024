import React from "react";

const ButtonLogout = ({
  name: name,
  icon: NavIcon,
  handleClick: handleClick,
}) => {
  return (
    <>
      <button
        className="pb-3 text-center text-sm flex flex-col items-center "
        onClick={() => handleClick()}
      >
        <div className="w-[60px] h-[60px] rounded-full border-[1px]  hover:bg-White-20 transition-colors duration-200 flex justify-center items-center">
          <NavIcon with="40px" height="40px" />
        </div>
        {name}
      </button>
    </>
  );
};

export default ButtonLogout;
