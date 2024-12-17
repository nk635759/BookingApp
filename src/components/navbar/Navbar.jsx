import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-blue-700    ">
      <nav className="mx-[150px] flex justify-between  p-2 ">
        <Link to="/">
          <span className="text-white font-semibold text-xl">BookNow</span>
        </Link>
        <div className="flex gap-4">
          <Link to="loginorsignup">
            {" "}
            <button className="bg-white hover:bg-slate-100 border-black rounded-sm text-sm px-[6px] h-6 shadow-lg text-center">
              Register
            </button>
          </Link>
          <Link to="loginorsignup">
            {" "}
            <button className="bg-white hover:bg-slate-100  border-black rounded text-sm px-[6px] h-6 shadow-lg text-center ">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
