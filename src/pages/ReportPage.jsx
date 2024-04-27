import React, { useState } from "react";

const ReportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [assetDetails, setAssetDetails] = useState(null);

  // Function to fetch asset details based on search query
  const fetchAssetDetails = () => {
    // Fetch asset details based on searchQuery
    // Example API call:
    // fetch(`api/assetDetails?search=${searchQuery}`)
    //   .then(response => response.json())
    //   .then(data => setAssetDetails(data))
    //   .catch(error => console.error("Error fetching asset details:", error));

    // Mock data for demonstration
    const mockAssetDetails = {
      name: "Asset Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      available: true,
      additionalInfo: "Additional information about the asset.",
      // Other data...
    };
    setAssetDetails(mockAssetDetails);
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
            <p className="mb-4">{assetDetails.description}</p>
            <p className="mb-4">
              Available:{" "}
              <span className={assetDetails.available ? "text-green-600" : "text-red-600"}>
                {assetDetails.available ? "Yes" : "No"}
              </span>
            </p>
            <div className="mb-4">
              {/* <PieChart
                data={[
                  { title: "Used", value: 20, color: "#E73361" },
                  { title: "Available", value: 80, color: "#F3564A" },
                ]}
                radius={40}
                lineWidth={25}
                animate
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={(index) => ({
                  fill: index.data.color,
                  fontSize: "8px",
                  fontFamily: "sans-serif",
                })}
              /> */}
              heyyyy
            </div>
            <p>{assetDetails.additionalInfo}</p>
            {/* Additional information */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;
