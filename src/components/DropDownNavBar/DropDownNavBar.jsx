import React from "react";
import Closed from "../../assets/DropdownNavBar/close-icon.svg";

const DropDownNavBar = ({ dropdownNavBar, setDropdownNavBar }) => {
  const handleCloseNavBar = () => {
    setDropdownNavBar(false);
  };
  return (
    <div
      className={`w-full h-full bg-mainColor fixed transition-transform duration-1000 ${
        dropdownNavBar ? "top-0" : "-top-full"
      }  left-0 z-50`}
    >
      <div className="flex items-center justify-end ">
        <button
          className="pt-6 pe-8 cursor-pointer"
          onClick={handleCloseNavBar}
        >
          <img src={Closed} alt="closed" />
          
        </button>
      </div>
    </div>
  );
};

export default DropDownNavBar;
