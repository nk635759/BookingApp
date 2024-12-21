import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function Dropdown({ options, setOptions }) {
  const [isOpen, setIsOpen] = useState(false);

  const increment = (field) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [field]: prevOptions[field] + 1,
    }));
  };

  const decrement = (field) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [field]: prevOptions[field] > 1 ? prevOptions[field] - 1 : 1,
    }));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full text-3xl font-medium text-blue-800 focus:outline-none"
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="flex items-center justify-between px-4 py-2">
              <span>Adult</span>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => increment("adult")}
                >
                  +
                </button>
                <span className="mx-2">{options.adult}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => decrement("adult")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <span>Children</span>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => increment("children")}
                >
                  +
                </button>
                <span className="mx-2">{options.children}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => decrement("children")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <span>Room</span>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => increment("room")}
                >
                  +
                </button>
                <span className="mx-2">{options.room}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => decrement("room")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
