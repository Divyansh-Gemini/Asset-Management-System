import React from "react";

const Chart = ({ title, width, height, src }) => {
  return (
    <iframe
      //   style={{
      //     background: "#21313C",
      //     border: "none",
      //     borderRadius: 2,
      //     boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
      //   }}
      title={title}
      width={width}
      height={height}
      src={src}
      className="rounded-lg border border-gray-500 shadow-lg"
    />
  );
};

export default Chart;
