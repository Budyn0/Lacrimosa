import React from "react";
import Navleft from "../molecules/nav-left";
import Navtop from "../molecules/nav-top";

function Navbar() {
  return (
    <div className="flex">
      <Navtop />
      <Navleft />
    </div>
  );
}

export default Navbar;
