import React from "react";
import Navbtn from "../atoms/nav-btn";
import buttonsData from "../utils/button-handlers";
import NavLogo from "../assets/itp-pib-logo.png";

function Navleft() {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen relative flex flex-col p-4 mx-auto border-r-2 border-navBlue">
        <div className="flex flex-col items-center ">
          <div className="w-full flex-col">
            <img src={NavLogo} alt="Logo" className="w-32 h-auto mx-auto" />
            <div className="border-b-2 border-navBlue w-full mt-4" />
          </div>

          <div className="flex flex-col items-center space-y-4 mt-20">
            {buttonsData.map((button, index) => (
              <Navbtn
                key={index}
                label={button.label}
                onClick={button.onClick}
              />
            ))}
          </div>
        </div>
        <div className="absolute font-xs bottom-4 left-0 right-0 text-center">
          Lacrimosa <br />
          version 0.0.1
        </div>
      </div>
    </div>
  );
}

export default Navleft;
