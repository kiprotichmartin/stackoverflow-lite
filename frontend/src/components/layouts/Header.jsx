import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../ui/Buttons";
import "../../assets/styles/Header.css";
import { fetchQuestions } from "../../redux/features/questions/questionsActions";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const handleQuestions = () => {
    dispatch(fetchQuestions());
  };

  return (
    <>
      <div className="header-container">
        <h3 className="header-title">
          <Link className="home-link" to="/">
            <span onClick={handleQuestions}>Stack Overflow-Lite</span>
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
