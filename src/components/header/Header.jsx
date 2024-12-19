import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCab,
  faEarListen,
  faEarth,
  faGears,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

function Header() {
  return (
    <div className="bg-[#0000FF] text-gray-200 w-full p-2">
      <div className="mx-[160px] flex items-center gap-6 relative  text-sm ">
        <button className="border-white border-2 rounded-full p-2  ">
          <FontAwesomeIcon icon={faBed} className="pr-1" />
          stays
        </button>
        <span className="buttonHover">
          <FontAwesomeIcon icon={faPlane} className="pr-1" />
          Flights
        </span>
        <span className="buttonHover">
          <FontAwesomeIcon icon={faEarth} className="pr-1" />
          Flight+Hotel
        </span>
        <span className="buttonHover">
          <FontAwesomeIcon icon={faCab} className="pr-1" />
          car rentals
        </span>
        <span className="buttonHover">
          <FontAwesomeIcon icon={faGears} className="pr-1" />
          Activities
        </span>
        <span className="buttonHover">
          <FontAwesomeIcon icon={faTaxi} className="pr-1" />
          Airport Taxi
        </span>
      </div>
    </div>
  );
}

export default Header;
