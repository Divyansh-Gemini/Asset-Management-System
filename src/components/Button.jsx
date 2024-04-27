import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ text = "", href = "/" }) => {
  return (
    <NavLink to={href} className="flex justify-center">
      <button
        className="bg-[#2A3E4C] text-white w-fit mx-auto px-7 py-2 border border-gray-500 rounded-lg hover:bg-pink transition duration-200"
        type="button"
      >
        {text}
      </button>
    </NavLink>
  );
};

export default Button;
