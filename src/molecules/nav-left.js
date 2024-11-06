import React from "react";
import { Link } from "react-router-dom";
import Navbtn from "../atoms/nav-btn";
import buttonsData from "../utils/nav-button-handlers";
import NavLogo from "../assets/itp-pib-logo.png";

function Navleft() {
  return (
    <div className="fixed top-0 left-0 min-h-screen flex flex-col justify-between border-r-2 border-navBlue z-10 p-4">
      <div className="flex flex-col items-center">
        <img src={NavLogo} alt="Logo" className="w-32 h-auto mb-6" />
        <div className="mt-32 flex flex-col items-center space-y-8 w-full">
          {buttonsData.map((button, index) => (
            <Link key={index} to={button.path} className="w-full">
              <Navbtn label={button.label} className="w-full" />
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mb-4">
        Lacrimosa <br />
        version 0.0.1
      </div>
    </div>
  );
}

export default Navleft;
