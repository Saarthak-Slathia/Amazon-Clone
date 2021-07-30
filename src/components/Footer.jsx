import React from "react";
import "./Footer.css";
import logo from "./assets/logo.png";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Footer = () => {
  return (
    <>
      <footer className="main__footer">
        <section className="know__us">
          <h4 className="footer__title">Get To Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </section>
        <section className="know__us">
          <h4 className="footer__title">Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </section>
        <section className="know__us">
          <h4 className="footer__title">Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerater</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </section>
        <section className="know__us">
          <h4 className="footer__title">Let Us Help You</h4>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </section>
      </footer>
      <hr />
      <footer className="mid__footer">
        <div className="footer__logo">
          <img src={logo} alt="" />
          <button className="button__lang">
            <LanguageIcon className="updown__icon2" />
            <a href="http://amazon.in" target="_blank" className="btn__lang">
              English
            </a>
            <div className="icons">
              <ArrowDropUpIcon className="updown__icon" />
              <ArrowDropDownIcon className="updown__icon" />
            </div>
          </button>
        </div>
        <br />
        <ul className="links">
          <li>Australia</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>China</li>
          <li>France</li>
          <li>Germany</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Netherlands</li>
          <li>Poland</li>
          <li>Singapore</li>
          <li>Spain</li>
        </ul>
        <ul className="links m-0">
          <li>Turkey</li>
          <li>United Arab Emirates</li>
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>
      </footer>
      <footer className="final__footer">
        <ul className="copyright">
          <li>Conditions of Use and Sale</li>
          <li>Privacy Notice</li>
          <li>Interest Based Ads</li>
          <li>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
