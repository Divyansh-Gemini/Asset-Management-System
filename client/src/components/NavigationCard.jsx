import React from "react";
import { NavLink } from "react-router-dom";

const NavigationCard = ({ text = "", href = "" }) => {
  return (
    <NavLink
      to={href}
      className="bg-card-bg-red font-bold text-2xl rounded-3xl w-[30%] h-[210px] bg-cover px-10 py-14"
    >
      <div>{text}</div>
    </NavLink>
  );
};

export default NavigationCard;
