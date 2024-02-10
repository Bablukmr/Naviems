import Image from "next/image";
import React from "react";

function CogenPage() {
  return (
    <div className=" mt-[100px] w-[90%] ml-[5%]">
      <div className=" ">
        {/* <Image src={"/banner1.jpg"} alt=''  className="w-[100px]"/> */}
        <img src={"/banner1.jpg"} alt="/" className="aspect-[6/2] rounded-md" />
      </div>
      <div className="w-full bg-white rounded-lg md:shadow-lg overflow-hidden">
        <div className="md:px-6 py-4">
          <h2 className=" text-2xl font-bold text-center mb-4 text-gray-800">
            Harinagar Sugar Mills Ltd. - Cogen
          </h2>
          <div className="text-gray-700 prose mt-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">
            <div className="mb-4 md:shadow-md md:p-6 rounded-md">
              <p>
                Harinagar Sugar Mills Ltd. implements cogeneration technology to
                produce both electricity and heat from a single fuel source,
                typically bagasse, a byproduct of sugar cane processing. This
                sustainable approach reduces reliance on external energy sources
                and minimizes environmental impact.
              </p>
            </div>

            <div className="mb-4 md:shadow-md md:p-6 rounded-md">
              <p className="">
                Cogeneration, also known as combined heat and power (CHP),
                utilizes the waste heat produced during electricity generation
                for various industrial processes such as distillation,
                evaporation, and drying, thereby increasing overall energy
                efficiency.
              </p>
            </div>
            <div className="mb-4 md:shadow-md md:p-6 rounded-md">
              <p className="mb-4">
                The cogenerated heat is often used in sugar refining processes,
                significantly reducing fuel consumption and greenhouse gas
                emissions compared to conventional energy production methods.
              </p>
            </div>
            <div className="mb-4 md:shadow-md md:p-6 rounded-md">
              <p className="mb-4">
                By integrating cogeneration technology, Harinagar Sugar Mills
                Ltd. exemplifies its commitment to sustainable and
                environmentally responsible practices while ensuring operational
                efficiency and cost-effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CogenPage;
