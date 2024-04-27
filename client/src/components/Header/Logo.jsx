import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <span className="text-3xl italic font-bold">Assetify</span>
    </NavLink>
  );
};

export default Logo;
