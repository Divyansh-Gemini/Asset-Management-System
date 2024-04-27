import React from "react";

const Heading = ({ text = "Heading" }) => {
  return (
    <h1 className="text-center w-fit mx-auto font-semibold text-3xl border-b-2 px-2 mb-8 border-primary">
      {text}
    </h1>
  );
};

export default Heading;
