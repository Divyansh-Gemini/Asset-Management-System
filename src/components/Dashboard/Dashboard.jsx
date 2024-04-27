import React from "react";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <Chart
          title="ColumnChart"
          width={700}
          height={400}
          src="https://charts.mongodb.com/charts-project-0-usumc/embed/charts?id=34971c88-5c8c-4dfc-a9da-d1408a5af85e&maxDataAge=3600&theme=dark&autoRefresh=true"
        />

        <Chart
          title="PieChart"
          width={400}
          height={400}
          src="https://charts.mongodb.com/charts-project-0-usumc/embed/charts?id=49011550-3f5c-4962-a9ef-6212e5fbe441&maxDataAge=3600&theme=dark&autoRefresh=true"
        />
      </div>
      <br />

      <div>
        <Chart
          title="BarChart"
          width={450}
          height={240}
          src="https://charts.mongodb.com/charts-project-0-usumc/embed/charts?id=85709959-3971-4317-9285-50e1c87f1317&maxDataAge=3600&theme=dark&autoRefresh=true"
        />

        <br />
      </div>
    </div>
  );
};

export default Dashboard;
