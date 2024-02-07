import Button from "@/components/Navbar/Button";
import Banner from "@/components/slider";
import Image from "next/image";

export default function Home() {
  
  return (
  <div className="mt-[100px] w-[90%] ml-[5%]">
    <Banner/>
    <div className="w-full mt-4 px-4 py-8 mx-auto bg-white rounded-lg shadow-lg md:px-8">
        <h1 className="mb-4 text-3xl font-semibold text-center">About Harinagar Sugar Mills Ltd.</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-4">
            <p className="mb-4 text-lg text-gray-700">
              Harinagar Sugar Mills Ltd. has been a pioneer since its establishment in 1933, driven by values of honesty,
              efficiency, and dedication. We specialize in the production of crystal sugar, quality alcohol/spirit, ethanol
              (fuel-grade power alcohol), and power. Our commitment to sustainability is evident in our eco-friendly practices,
              where we utilize every part of the sugarcane plant to minimize waste.
            </p>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Our Commitment</h2>
              <p className="text-gray-700">
                At Harinagar Sugar Mills Ltd., we prioritize quality, sustainability, and innovation.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Quality Assurance</h2>
              <p className="text-gray-700">
                Our products undergo rigorous testing and adhere to the highest standards.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Sustainability</h2>
              <p className="text-gray-700">
                We are committed to eco-friendly practices, ensuring minimal environmental impact.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <Image className=" rounded-lg" src="/banner1.jpg"  width={600} height={500} alt="About Image" />
          </div>
        </div>
      </div>
    </div>


  )
}
