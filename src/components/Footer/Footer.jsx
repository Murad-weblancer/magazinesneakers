import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaVimeoSquare,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  return (
    location.pathname !== "/cart" && (
      <div className="footer">
        <div className="container footer-flex">
          <div className="footer-right">
            <img
              src="https://sneakers-magazine.com/wp-content/uploads/2019/06/sneakers_logo_short_w_2019.png"
              alt=""
            />
            <h4> Imprint | Data Protection | Privacy Policy</h4>
          </div>
          <div className="footer-left">
            <FaFacebookF className="icons" size={25} />
            <FaInstagram className="icons" size={25} />
            <FaTwitter className="icons" size={25} />
            <FaVimeoSquare className="icons" size={25} />
          </div>
        </div>
      </div>
    )
  );
};
