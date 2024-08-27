import React from "react";

const JornadasNumeros = () => {
  return (
    <section className="bg-White pt-10 laptop1:ms-40">
      <div>
        {/* Course Hightligh */}
        <div className="w-full mt-10 flex flex-wrap">
          {/* Box_1 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_1 py-3 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-Bold text-[3rem]">450</p>
            <p className="text-center">inscriptos</p>
          </div>
          {/* Box_2 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_2 py-3 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-Bold text-[3rem]">100+</p>
            <p className="text-center">trabajos científicos presentados</p>
          </div>
          {/* Box_3 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_3 py-3 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-Bold text-[3rem]">50+</p>
            <p className="text-center">disertantes</p>
          </div>
          {/* Box_3 */}
          <div className="w-full flex flex-col justify-start items-center bg-TealGreen_4 py-3 px-2 tablet:w-1/2 laptop1:w-1/4">
            <p className="text-center font-Bold text-[3rem]">4</p>
            <p className="text-center">conferencias centrales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JornadasNumeros;
