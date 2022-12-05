import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../ui/Buttons";
import "../../assets/styles/Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <h3 className="header-title">
          <Link className="home-link" to="/">
            {" "}
            Stack Overflow-Lite
          </Link>
        </h3>
        {/* <div className="nav-links">
          <a href="#about" className="nav-link">
            about
          </a>
          <a href="#contact" className="nav-link">
            contact
          </a>
        </div> */}
        <div className="header-buttons">
          <Link to="login">
            <PrimaryButton>Login</PrimaryButton>
          </Link>
          <Link to="signup">
            <SecondaryButton>Sign Up</SecondaryButton>
          </Link>
        </div>
      </div>
    </>
  );
}
