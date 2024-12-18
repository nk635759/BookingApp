import React from "react";
import Navbar from "../../components/navbar/Navbar";

export default function LoginOrSifnup() {
  return (
    <div className="flex-grow flex justify-center items-center mt-4 ">
      <div className="grid gap-y-3 w-[350px]">
        {/* signin o create section */}
        <h2 className="font-bold">Sign in or create an account</h2>
        <p className="mt-2 ">
          You can sign in using your Booking.com account to access our services.
        </p>
        {/* input or button */}
        <div>
          <label htmlFor="email" className="font-semibold text-sm">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="border-gray-700 border-[1px] w-[350px]  rounded-md p-[6px]"
          />
        </div>
        <button className="bg-blue-600 w-[350px] text-white font-semibold h-12 rounded-md hover:bg-blue-700">
          Continue With email
        </button>
        {/* ----------or use one of these options------- */}
        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="px-4 text-gray-500">or use one of these options</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
