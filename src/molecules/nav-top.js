import React from "react";

import Searchbar from "../atoms/search-bar";
import Logoutbtn from "../atoms/logout-btn";
import NavLogo from "../assets/itp-pib-logo.png";

function Navtop() {
  return (
    <div className="fixed top-0 left-0 w-full z-10 p-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <img src={NavLogo} alt="Logo" className="w-32 h-auto" />
        </div>

        <div className="flex-1 flex justify-center pl-4">
          <Searchbar />
        </div>

        <div className="flex-shrink-0">
          <Logoutbtn />
        </div>
      </div>
    </div>
  );
}

export default Navtop;
