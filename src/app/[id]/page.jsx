"use client";
import { useState, useEffect } from "react";
import { apiData } from "@/components/api";
import React from "react";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";

function Compliance({ params }) {
  const [apival, setApiVal] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");
  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("");
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
      const header = singalData[0].header;
      const fileName = singalData[0].title;
      console.log("pdfUrl:", pdfUrl);
      setPdfUrl(pdfUrl);
      setTitle(fileName);
      setHeader(header);
    } else {
      console.log("No 'file' property found in singalData[0]");
    }
  }, [apival, ids]);
  // const aaa={`http://localhost:5000/files/${pdfUrl}`}
  const nnurll = "https://harinagr.onrender.com/files/" + pdfUrl;
  console.log("https://harinagr.onrender.com/files/" + pdfUrl);
  return (
    <div className="mt-[100px]">
      <div className="w-full mt-4 px-4 py-8 mx-auto bg-white rounded-lg shadow-lg md:px-8">
        <h1 className="mb-4 text-3xl font-semibold text-center">
          Compliance of {header}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
          <div className="md:w-1/2 md:pr-4 ">
          <h2 className="mb-2 text-xl font-semibold text-center">{title}</h2>
            <p className="mb-4 text-lg text-gray-700">
            Harinagar Sugar Mills Ltd. submits its six-monthly compliance report for the period from April 2021 to September 2021. The report outlines the statutory compliance and measures taken for environmental preservation, including air and water quality monitoring, pollution control device installation, and storage practices. The company confirms adherence to regulations and guidelines set by the State Environment Impact Assessment Authority and other regulatory bodies.
            </p>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Quality Assurance</h2>
              <p className="text-gray-700">
              Revised prior permission, if required, shall be obtained for groundwater withdrawal.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Sustainability</h2>
              <p className="text-gray-700">
              We are committed to eco-friendly practices, ensuring minimal environmental impact.
              </p>
            </div>
            {/* <div className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">Sustainability</h2>
              <p className="text-gray-700">
                We are committed to eco-friendly practices, ensuring minimal
                environmental impact.
              </p>
            </div> */}
          </div>
          <div className="md:w-1/2 md:pl-4 my-4">
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
