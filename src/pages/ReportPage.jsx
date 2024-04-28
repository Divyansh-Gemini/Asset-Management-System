import React, { useState } from "react";
import axios from "axios";

const ReportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [assetDetails, setAssetDetails] = useState(null);

  // Function to fetch asset details based on search query
  const fetchAssetDetails = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/v1/asset/get-asset-name/${searchQuery}`
    );

    console.log(response.data.asset);

    setAssetDetails(response.data.asset);
  };

  const handleSearch = () => {
    // Fetch asset details when search is submitted
    fetchAssetDetails();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <input
            type="text"
            placeholder="Search Asset"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            className="ml-4 bg-gradient-to-r from-[#E73361] to-[#F3564A] text-white px-4 py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {assetDetails && (
          <div className="bg-white shadow-md rounded-md p-8 text-black">
            <h2 className="text-2xl font-bold mb-4">{assetDetails.name}</h2>
            <p className="mb-4">Description: {assetDetails.description}</p>
            <p className="mb-4">
              Available:{" "}
              <span
                className={
                  assetDetails.isAvailable ? "text-green-600" : "text-red-600"
                }
              >
                {assetDetails.isAvailable ? "Yes" : "No"}
              </span>
            </p>

            <p>Capacity: {assetDetails.capacity}</p>

            <iframe
              // style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
              className="rounded-lg border border-gray-500 shadow-lg bg-bg"
              width="640"
              height="480"
              src="https://charts.mongodb.com/charts-project-0-nyxxcpd/embed/charts?id=662ded15-afb5-4cfb-83b6-ee72b1f70d20&maxDataAge=60&theme=dark&autoRefresh=true"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;
