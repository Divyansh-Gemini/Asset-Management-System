import React from "react";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-10">
        <iframe
          width="640"
          height="480"
          className="rounded-lg border border-gray-500 shadow-lg"
          src="https://charts.mongodb.com/charts-project-0-nyxxcpd/embed/charts?id=662d633a-3906-4bb9-8840-7cfdb4facc02&maxDataAge=60&theme=dark&autoRefresh=true"
        ></iframe>

        <iframe
          width="640"
          height="480"
          className="rounded-lg border border-gray-500 shadow-lg"
          src="https://charts.mongodb.com/charts-project-0-nyxxcpd/embed/charts?id=662d63b4-820f-4fdc-8a0f-a35fecf1900b&maxDataAge=60&theme=dark&autoRefresh=true"
        ></iframe>
      </div>

      <iframe
        width="640"
        height="480"
        className="rounded-lg border border-gray-500 shadow-lg"
        src="https://charts.mongodb.com/charts-project-0-nyxxcpd/embed/charts?id=662d6542-da2c-48c6-858a-982128fbf167&maxDataAge=60&theme=dark&autoRefresh=true"
      ></iframe>
    </div>
  );
};

export default Dashboard;
