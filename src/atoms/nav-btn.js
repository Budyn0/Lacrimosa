import React from "react";

function Navbtn({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block rounded-full bg-navBlue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
    >
      {label}
    </button>
  );
}

export default Navbtn;
