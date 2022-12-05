import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/InitialPage.css";
import QuestionBox from "../components/layouts/QuestionBox";
import { PrimaryButton } from "../components/ui/Buttons";

export default function InitialPage() {
  return (
    <>
      <div className="main-container">
        <div className="initialpage-container">
          <section className="action-btns">
            <input
              className="search-input"
              type="search"
              name=""
              id=""
              placeholder="search a question"
            />
            <Link to="askquestion">
              <PrimaryButton>Ask Question</PrimaryButton>
            </Link>
          </section>
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
        </div>
      </div>
    </>
  );
}
