import React from "react";
import "../../assets/styles/Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <h3 className="footer-title">Stack Overflow-Lite</h3>
        <div className="footer-links">
          {/* <FaGithub> */}
          <a href="https://github.com/kiprotichmartin">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/martinkiprotich/">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="https://twitter.com/martinkiprotch">
            <FaTwitter className="footer-icon" />
          </a>
          {/* </FaGithub> */}
        </div>
        <p className="footer-signature">Made with ❤ by Martin Kiprotich</p>
      </div>
    </>
  );
}
