import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PageHeading from "../components/Heading";
import Heading from "../components/Heading";
import NavigationCard from "../components/NavigationCard";

const HomePage = () => {
  return (
    <section className="">
      <div className="flex flex-wrap gap-10 py-5">
        <NavigationCard text="Dashboard" href="/dashboard" />
        <NavigationCard text="Assets" href="/assets" />
        <NavigationCard text="Report" href="/report" />
        <NavigationCard text="Reservations" href="/reservations" />
        <NavigationCard text="Feedback" href="/feedback" />
      </div>

      {/* <Heading text="Dashboard" />
      <Dashboard /> */}
    </section>
  );
};

export default HomePage;
