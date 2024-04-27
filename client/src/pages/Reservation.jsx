import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // CSS for date picker
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css"; // CSS for time picker

const Reservation = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null); // Using null as initial time
  const [isClicked, setIsClicked] = useState(false); // State for button click effect

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (time) => {
    setTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Date:", date);
    console.log("Time:", time && time.format("HH:mm"));
    // Set button click effect
    setIsClicked(true);
    // Reset button click effect after 0.3 seconds
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <div className="bg-[#21313C] h-screen">
      <div className=" p-10 bg-[#21313C]">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
          Reservation
        </h2>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Make a Reservation
        </h2>
        <img
          src="\assets\images\design.png"
          alt="Image"
          className="w-auto h-5 mx-auto"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 px-20">
          {/* Left side with image */}
          <img
            src="\assets\images\reserved.png"
            alt="Image"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-6 mr-20 ">
          {/* Right side with reservation form */}
          <h2 className="text-2xl font-bold mb-4 text-white">Enter Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-white font-bold mb-2"
              >
                Date
              </label>
              <DatePicker
                id="date"
                selected={date}
                onChange={handleDateChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-56 focus:outline-none focus:border-blue-500"
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-white font-bold mb-2"
              >
                Time
              </label>
              <TimePicker
                id="time"
                className="border border-gray-300 rounded-lg  w-56 p-2 focus:outline-none focus:border-blue-500"
                value={time}
                onChange={handleTimeChange}
                required
              />
            </div>
            <button
              type="submit"
              className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ${
                isClicked && "transform scale-95"
              }`}
              onMouseDown={() => setIsClicked(true)} // Set button click effect on mouse down
              onMouseUp={() => setIsClicked(false)} // Reset button click effect on mouse up
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
