import React from "react";
import CardView from "../components/CardView";
import { NavLink } from "react-router-dom";

const AssetsPage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <CardView />
        <CardView />
        <CardView />
        <CardView />
        <CardView />
      </div>

      <NavLink
        to="/add-asset"
        className="fixed bottom-10 end-10 py-2 px-5 text-5xl bg-pink rounded-full text-white"
      >
        <button>+</button>
      </NavLink>
    </>
  );
};

export default AssetsPage;
