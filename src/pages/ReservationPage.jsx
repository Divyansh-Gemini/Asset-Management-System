import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // CSS for date picker
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css"; // CSS for time picker

const ReservationPage = () => {
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
    <div className="bg-[#21313C] min-h-screen flex">
      {/* Left Side - Reservation Section */}
      <div className="w-1/2 p-8 flex flex-col ">
        <img
          src="assets\images\reservation.jpg"
          alt="Reservation Image"
          className="w-80 mx-auto mt-36 rounded-2xl shadow-md shadow-[#E73361]"
        />
      </div>

      {/* Right Side - Reservation Form */}
      <div className="w-1/2 p-8 rounded-lg ">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Reserve Asset
        </h2>
        <img
          src="\assets\images\design.png"
          alt="Image"
          className="w-auto h-5 mx-auto mb-10"
        />
        <form onSubmit={handleSubmit} className="space-y-10 max-w-md m-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mb-4 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-white font-bold mb-2">
              Date
            </label>
            <DatePicker
              id="date"
              selected={date}
              onChange={handleDateChange}
              className="w-full px-4 py-2 mb-4 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
              dateFormat="dd/MM/yyyy"
              required
            />
          </div>
          <div className="mb-4 text-black">
            <label htmlFor="time" className="block text-white font-bold mb-2">
              Time
            </label>
            <TimePicker
              id="time"
              className="w-full px-4 py-2 mb-4 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent"
              value={time}
              onChange={handleTimeChange}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-[#E73361] to-[#F3564A] text-white px-4 py-2 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#E73361] focus:border-transparent transition duration-300 ${
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
  );
};

export default ReservationPage;
