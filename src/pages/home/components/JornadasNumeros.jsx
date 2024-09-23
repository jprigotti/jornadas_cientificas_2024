import React from "react";

const JornadasNumeros = () => {
  return (
    <section className="bg-White pt-24 laptop1:ms-40">
      <div>
        {/* Course Hightligh */}
        <div className="w-full mt-10 flex flex-wrap">
          {/* Box_1 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_1 py-10 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-poppins font-bold text-White text-[3rem]">450</p>
            <p className="text-center text-White">inscriptos</p>
          </div>
          {/* Box_2 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_2 py-10 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-poppins font-bold text-White text-[3rem]">100+</p>
            <p className="text-center text-White">trabajos científicos presentados</p>
          </div>
          {/* Box_3 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_1 py-10 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-poppins font-bold text-White text-[3rem]">50+</p>
            <p className="text-center text-White">disertantes</p>
          </div>
          {/* Box_3 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_2 py-10 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-poppins font-bold text-White text-[3rem]">4</p>
            <p className="text-center text-White">conferencias centrales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JornadasNumeros;
