// App.js
import { faBed, faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// Header component displays the title and a button
function Header() {
  return (
    <div className="text-white mx-[160px] mt-8 grid grid-row gap-4">
      <h1 className="text-6xl font-bold">Travel has never</h1>
      <h1 className="text-6xl font-bold">felt this cosy</h1>
      <h1 className="text-3xl">Book an entire place all to yourself</h1>
      <button className="bg-[#0000FF] w-[200px] h-[50px] rounded-md font-semibold">
        discover holiday rentals
      </button>
    </div>
  );
}

// SearchBar component includes icons and a date picker
function SearchBar({
  openDate,
  setOpenDate,
  date,
  setDate,
  options,
  setOptions,
}) {
  return (
    <div className="bg-yellow-500 border-yellow-500 mx-[160px] border-4 h-12 rounded-md mt-[40px] flex justify-between">
      <div className="grid grid-cols-3 w-full gap-1">
        <span className="bg-white rounded-sm">
          <FontAwesomeIcon
            icon={faBed}
            className="text-2xl text-blue-700 ml-2 mt-2"
          />
          <input
            type="text"
            placeholder="Where are you going?"
            name=""
            id=""
            className="outline-none ml-2 placeholder-black font-semibold "
          />
        </span>
        <span className="bg-white rounded-sm">
          {/* Button to toggle the date picker */}
          <button onClick={() => setOpenDate(!openDate)}>
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-2xl text-blue-700 ml-2 mt-2"
            />
            <span className="text-gray-600 ml-4">
              Check-in date -- check-out date{" "}
            </span>
            {/* Conditionally render the date picker */}
            {openDate && (
              <DateRange
                className="relative"
                editableDateInputs={true}
                onChange={(items) => setDate([items.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </button>
        </span>
        <span className="bg-white rounded-sm">
          <FontAwesomeIcon
            icon={faPerson}
            className="text-2xl text-blue-700 ml-2 mt-2"
          />
          <span className="ml-2 text-sm font-semibold mr-16">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          <Dropdown options={options} setOptions={setOptions} />
        </span>
      </div>
      <button className="bg-blue-700 text-white text-xl font-bold ml-1 rounded-md w-[100px]">
        Search
      </button>
    </div>
  );
}

export default function Home() {
  const [openDate, setOpenDate] = useState(false); // State to manage date picker visibility
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div
      style={{ backgroundImage: "url('./public/booking-app.jpeg')" }}
      className="bg-origin-content h-[350px] w-full bg-no-repeat bg-cover bg-center opacity-90 fixed"
    >
      <Header />
      <SearchBar
        openDate={openDate}
        setOpenDate={setOpenDate}
        date={date}
        setDate={setDate}
        options={options}
        setOptions={setOptions}
      />
    </div>
  );
}
