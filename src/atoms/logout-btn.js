import React from 'react';

import LogoutIcon from "../assets/logout-icon.png"

function Logoutbtn() {
  return (
    <div>
      <button className="flex items-center justify-between border border-black rounded-full text-black px-4 py-2">
        Wyloguj
        <img src={LogoutIcon} alt="Logout Icon" className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}

export default Logoutbtn;
