import React from "react";
import "./Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import india from "./assets/india.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Rightmenu = () => {
  return (
    <>
      <div className="country">
        <img src={india} alt="" id="india" />
        <ExpandMoreIcon className="more__icon" />
      </div>
      <div className="select__address m-0">
        <h1>
          Hello, Sign In <br />
          <span>Accounts & Lists</span>
        </h1>
        <ExpandMoreIcon className="more__icon mr-1" />
      </div>
      <div className="select__address m-0">
        <h1>
          Returns <br />
          <span>& Orders</span>
        </h1>
        <ExpandMoreIcon className="more__icon mr-1" />
      </div>
      <div className="cart">
        <h2 className="cart__number">0</h2>
        <ShoppingCartIcon className="cart__icon" />
      </div>
    </>
  );
};

export default Rightmenu;
