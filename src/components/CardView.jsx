import React from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const CardView = () => {
  const [assets, setAssets] = useState()

  useEffect(() => {
    async function fetchData() {
      const response = await axios('http://localhost:5000/api/v1/asset/get-all-assets')
      setAssets(response.data.asset)
    }
    fetchData();
  }, []);

  const handleEdit = (id) => {
    window.location.href = `/update-asset?${id}`
  }
  const handleDelete = (id) => {
    axios.patch(`http://localhost:5000/api/v1/asset/delete-asset/${id}`)
    window.location.reload()
  }

  const handleReserve = (id)=>{
    window.location.href = `/reservations?${id}`
  }

  return (
    <div className="w-3/4  overflow-hidden shadow-lg mx-auto  text-black  ">
      {assets && assets.map((asset) => {
        return (
          <div className='mb-10 ' key={asset._id}>
            <div className="flex bg-[#ace5f1] rounded-t-xl  " >
              <img
                className="w-1/3 m-5 rounded-xl"
                src="assets/images/cardview.jpg"
                alt="Image"
              />
              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2 mt-2">{asset.name}</div>
                <p className="text-gray-700 text-base">
                  {asset.description}
                </p>
                <p className="text-gray-700 font-bold mt-2">Capacity: {asset.capacity}</p>
                <p className="text-gray-700 font-bold">Availability: {asset.available_unit}</p>
              </div>
            </div>

            <div className="p-3 px-6 flex justify-end bg-[#ace5f1] rounded-b-xl " >
              <button className="bg-gradient-to-r from-[#E73361] to-[#F3564A] rounded-md hover:bg-opacity-90 focus:outline-none hover:ring-2 hover:ring-[#E73361] hover:border-transparent text-white font-bold py-2 px-2 w-24 mr-2"
                onClick={() => { handleEdit(asset._id) }}
              >
                Edit
              </button>
              <button className="bg-gradient-to-r from-[#E73361] to-[#F3564A] rounded-md hover:bg-opacity-90 focus:outline-none hover:ring-2 hover:ring-[#E73361] hover:border-transparent text-white font-bold mr-2 w-24"
                onClick={()=>{handleDelete(asset._id)}}
              >
                Delete
              </button>
              <button 
                 onClick={()=>{handleReserve(asset._id)}}
              className="bg-gradient-to-r from-[#E73361] to-[#F3564A] rounded-md hover:bg-opacity-90 focus:outline-none hover:ring-2 hover:ring-[#E73361] hover:border-transparent text-white font-bold  w-24">
                Reserve
              </button>
            </div>
          </div>
        )
      }
      )}
    </div>
  );
};

export default CardView;
