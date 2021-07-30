import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <>
      <div className="search__area">
        <input type="text" id="search" />
        <button id="search__icon">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
