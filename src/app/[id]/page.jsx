import React from "react";

function Compliance({ params }) {
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
