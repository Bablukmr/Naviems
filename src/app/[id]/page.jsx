import { apiData } from "@/components/api";
import React from "react";

function Compliance({ params }) {

  // useEffect(async () => {
  //   let apival = await apiData();
  //   setApiVal(apival);
  //   const sugarHeaders = apival.filter((item) => item.header === "Suger");
  //   // .map(item => item.header);
  //   const distilleryHeaders = apival.filter(
  //     (item) => item.header === "Distillery"
  //   );
  //   // .map(item => item.header);
  //   setSugarHeader(sugarHeaders);
  //   setDistilleryHeader(distilleryHeaders);
  // }, []);
  
  const names = params.id;
  console.log(params.id);
  return (
    <div>
      <div className="mt-[100px]">Compliance</div>
      <h1>{names}</h1>
    </div>
  );
}

export default Compliance;
