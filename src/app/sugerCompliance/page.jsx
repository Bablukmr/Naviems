import React from "react";

function SugerCompliance() {
  return (
    <div className="mt-[90px] mb-5 w-[90%] ml-[5%]">
      <div>
        <h1 className="text-center text-xl font-semibold mb-6">Compliance</h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <div className="w-full md:w-[40%]">
          <div className="mb-4">
            <h2 className="mb-2 text-xl font-semibold">Our Commitment</h2>
            <p className="text-gray-700">
              At Harinagar Sugar Mills Ltd., we prioritize quality,
              sustainability, and innovation.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="mb-2 text-xl font-semibold">Our Commitment</h2>
            <p className="text-gray-700">
              At Harinagar Sugar Mills Ltd., we prioritize quality,
              sustainability, and innovation.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[55%]">
          <embed src="/A-08.pdf" className="w-full h-[500px]"/>
        </div>
      </div>
    </div>
  );
}

export default SugerCompliance;
