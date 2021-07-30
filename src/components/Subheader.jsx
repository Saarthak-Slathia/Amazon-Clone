import React from "react";
import "./Subheader.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const Subheader = () => {
  return (
    <>
      <navbar id="subheader">
        <div className="nav_links">
          <ul>
            <li className="flex">
              <MenuRoundedIcon />
              All
            </li>
            <li>Prime Day Deals</li>
            <li>Best Sellers</li>
            <li>Amazon Pay</li>
            <li>Mobiles</li>
            <li>Fashion</li>
            <li>Electronics</li>
            <li className="flex">
              Prime <ExpandMoreRoundedIcon />
            </li>
            <li>New Releases</li>
            <li>Customer Service</li>
            <li>Computers</li>
          </ul>
        </div>
        <div className="right__banner">
          <h3 id="shop__now">Shop Now</h3>
          <ChevronRightRoundedIcon />
        </div>
      </navbar>
    </>
  );
};

export default Subheader;
