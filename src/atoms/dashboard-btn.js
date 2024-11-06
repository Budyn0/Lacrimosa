import React from "react";

function DashboardButton({ label, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-80 h-40 bg-navBlue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${className}`}
    >
      {label}
    </button>
  );
}

export default DashboardButton;
