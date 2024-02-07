import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div className="mt-[80px]">
      <div className="w-full mt-4 px-4 py-8 mx-auto bg-white rounded-lg shadow-lg md:px-8">
        <h1 className="mb-4 text-3xl font-semibold text-center">
          About Harinagar Sugar Mills Ltd.
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-4">
            <p className="mb-4 text-lg text-gray-700">
              Harinagar Sugar Mills Ltd. has been a pioneer since its
              establishment in 1933, driven by values of honesty, efficiency,
              and dedication. We specialize in the production of crystal sugar,
              quality alcohol/spirit, ethanol (fuel-grade power alcohol), and
              power. Our commitment to sustainability is evident in our
              eco-friendly practices, where we utilize every part of the
              sugarcane plant to minimize waste.
            </p>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Our Commitment</h2>
              <p className="text-gray-700">
                At Harinagar Sugar Mills Ltd., we prioritize quality,
                sustainability, and innovation.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Quality Assurance</h2>
              <p className="text-gray-700">
                Our products undergo rigorous testing and adhere to the highest
                standards.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Sustainability</h2>
              <p className="text-gray-700">
                We are committed to eco-friendly practices, ensuring minimal
                environmental impact.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <Image
              className=" rounded-lg"
              src="/banner1.jpg"
              width={600}
              height={500}
              alt="About Image"
            />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto px-4">
        <h1 className="text-3xl font-semibold my-4">Emission Consent Order</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <p className="mb-4">
            The proponent, M/s Harinagar Sugar Mills Ltd., must ensure that
            there is no increase in pollution load beyond what was committed or
            proposed in the application for increasing its production capacity
            by changing the raw material matrix. This means that any changes
            made to the production process or raw materials must not result in
            additional pollution beyond the levels initially agreed upon or
            proposed.
          </p>

          <p className="mb-4">
            Any alterations, additions, deletions, or modifications to the plant
            must receive prior clearance from the Bihar State Pollution Control
            Board. Furthermore, M/s Harinagar Sugar Mills Ltd. must comply with
            the obligations outlined in sections 22, 23, and 34A of the Air
            (Prevention &amp; Control of Pollution) Act, 1981. Additionally, the
            company is expected to cooperate with the Board in carrying out its
            functions as per sections 24, 25, and 26 of the Act.
          </p>

          <p className="mb-4">
            The company must adhere to the requirements specified in Rule 14 of
            the Environment (Protection) Rules, 1986. Additionally, it must
            comply with the provisions of relevant regulations, such as the
            Hazardous And Other Wastes (Management and Transboundary Movement)
            Rules, 2016; the Manufacture, Storage and Import of Hazardous
            Chemical Rules, 1989; and the Public Liability Insurance Act, 1991,
            as applicable.
          </p>

          <p className="mb-4">
            Regular monitoring of emissions and ambient air quality from
            representative points is mandatory for M/s Harinagar Sugar Mills
            Ltd. The company must maintain air quality in accordance with the
            standards set by the Bihar State Pollution Control Board and provide
            evidence of compliance when requested.
          </p>

          <p className="mb-4">
            Applications for consent renewal must be submitted at least 30 days
            before the expiration of the current consent period or within 30
            days from the date of receipt of the order, whichever is applicable.
          </p>

          <p className="mb-4">
            Stack monitoring and ambient air quality (including noise) reports
            must be submitted monthly during the consent period.
          </p>

          <p className="mb-4">
            Proper storage and management of boiler ash from the sugar plant, in
            line with CPCB guidelines, are essential to prevent adverse effects
            on air quality. M/s Harinagar Sugar Mills Ltd. is required to submit
            an ash management plan to the Board for approval.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
