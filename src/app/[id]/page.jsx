"use client";
import { useState, useEffect } from "react";
import { apiData } from "@/components/api";
import React from "react";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";

function Compliance({ params }) {
  const [apival, setApiVal] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");
  const [title, setTitle] = useState("");
  const ids = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiData();
        setApiVal(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const singalData = apival.filter((d, i) => d._id == ids);
    if (singalData[0] && singalData[0].file) {
      const pdfUrl = singalData[0].file;
      const fileName = singalData[0].title;
      console.log("pdfUrl:", pdfUrl);
      setPdfUrl(pdfUrl);
      setTitle(fileName);
    } else {
      console.log("No 'file' property found in singalData[0]");
    }
  }, [apival, ids]);
  // const aaa={`http://localhost:5000/files/${pdfUrl}`}
  const nnurll="http://localhost:5000/files/"+pdfUrl
console.log("http://localhost:5000/files/"+pdfUrl);
  return (
    <div className="mt-[100px]">
      <div className="w-full mt-4 px-4 py-8 mx-auto bg-white rounded-lg shadow-lg md:px-8">
        <h1 className="mb-4 text-3xl font-semibold text-center">
          COMPLIANCE of {title}
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
           
          {pdfUrl && (
              // <PDFViewer style={{ width: "100%", height: "600px" }}>
                <iframe src={nnurll} width="700" height="500" title="PDF" />
              // </PDFViewer>
            )}
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="mt-[100px]">Compliance</div>
    //   <h1>{ids}</h1>
    //   {/* Render the PDF URL */}
    //   {pdfUrl && <a href={`http://localhost:5000/files/${pdfUrl}`} target="_blank" rel="noopener noreferrer">Download PDF</a>}
    // </div>
  );
}
//{"http://localhost:5000/"+pdfUrl}
export default Compliance;
