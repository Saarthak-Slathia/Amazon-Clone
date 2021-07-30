import React from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";
import SearchBar from "./SearchBar";
import Rightmenu from "./Rightmenu";
import RoomIcon from "@material-ui/icons/Room";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="left">
          <div className="logo">
            <img id="logo" src={logo} alt="" />
            <p className="in">.in</p>
          </div>
          <div className="select__address">
            <RoomIcon />
            <h1>
              Hello <br />
              <span>Select Your Address</span>
            </h1>
          </div>
          <SearchBar />
          <Rightmenu />
        </div>
      </header>
    </>
  );
};

export default Navbar;
