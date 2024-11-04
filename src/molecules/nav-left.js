import React from "react";
import Navbtn from "../atoms/nav-btn";
import buttonsData from "../utils/button-handlers";
import NavLogo from "../assets/itp-pib-logo.png";

function Navleft() {
  return (
    <div className="fixed top-0 left-0 min-h-screen flex flex-col justify-between border-r-2 border-navBlue z-10 p-4">
      <div className="flex flex-col items-center">
        <img src={NavLogo} alt="Logo" className="w-32 h-auto mb-6" />
        <div className="mt-32 flex flex-col items-center space-y-8"> 
          {buttonsData.map((button, index) => (
            <Navbtn
              key={index}
              label={button.label}
              onClick={button.onClick}
              className="w-full text-center" 
            />
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
