import React from "react";
import SearchIcon from "../assets/search-icon.png"

function Searchbar() {
  return (
    <div className="max-w-[480px] w-full px-4">
      <form action="/search" className="relative">
        <input
          type="text"
          name="q"
          className="w-full border h-12 shadow p-4 rounded-full dark:text-black dark:border-black "
          placeholder="Wyszukaj"
        />
        <button type="submit" className="absolute top-3 right-4">
          <img src={SearchIcon} alt="search icon" className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;

