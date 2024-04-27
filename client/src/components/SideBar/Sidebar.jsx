import React from "react";
import SideItem from "./SideItem";
import Button from "../Button";

const Sidebar = () => {
  return (
    <aside className="fixed flex flex-col justify-between bg-[#2A3E4C] h-screen pb-24 cursor-pointer">
      <div className="flex flex-col">
        <SideItem text="Home" href="/" />
        <SideItem text="Dashboard" href="/dashboard" />
        <SideItem text="Assets" href="/assets" />
        <SideItem text="Report" href="/report" />
        <SideItem text="Reservations" href="/reservations" />
        <SideItem text="Feedback" href="/feedback" />
      </div>

      <Button text="Contact Us" href="/contact" />
    </aside>
  );
};

export default Sidebar;
