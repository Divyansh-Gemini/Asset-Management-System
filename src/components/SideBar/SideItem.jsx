import React from "react";
import { NavLink } from "react-router-dom";

const SideItem = ({ text = "", href = "/" }) => {
  return (
    <NavLink to={href}>
      <h1 className="px-6 pe-20 py-5 hover:bg-bg text-white">{text}</h1>
    </NavLink>
  );
};

export default SideItem;
