import React from "react";
import logo from "../assets/logo.webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2" width={100} height={100} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shiva-kumar-9a632123b/" target="_blank" rel= "noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin/>
        </a>
        <a href="https://github.com/Shiva1310" target="_blank" rel= "noopener noreferrer" aria-label="GitHub">
            <FaGithub/>
        </a><a href="" target="_blank" rel= "noopener noreferrer" aria-label="Instagram">
            <FaInstagram/>
        </a><a href="" target="_blank" rel= "noopener noreferrer" aria-label="Twitter">
            <FaSquareXTwitter/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
