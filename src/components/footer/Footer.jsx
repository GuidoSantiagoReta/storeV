import React from "react";
import "./Footer.css"
import {AiFillHeart} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-footer text-center text-lg-left ">
      <div className="text-center p-3 text-light">
        &copy; {new Date().getFullYear()} {"Guido Santiago Reta" }
        <AiFillHeart size={20} className="text-dark ms-2"/>
        
      </div>
    </div>
  );
};
export default Footer;