import React from "react";
import { PrimaryButton, SecondaryButton } from "../ui/Buttons";
import "../../assets/styles/Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <h3 className="header-title">
          <a href="#home">
            Stack Overflow-Lite
          </a>
        </h3>
        <div className="nav-links">
          <a href="#about" className="nav-link">
            about
          </a>
          <a href="#contact" className="nav-link">
            contact
          </a>
        </div>
        <div className="header-buttons">
          <PrimaryButton>Login</PrimaryButton>
          <SecondaryButton>Sign Up</SecondaryButton>
        </div>
      </div>
    </>
  );
}
