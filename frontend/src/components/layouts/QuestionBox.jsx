import React from "react";
import "../../assets/styles/QuestionBox.css";
import avatar from "../../assets/images/reapers_wolf_2.jpg";
import { Link } from "react-router-dom";

export default function QuestionBox() {
  return (
    <>
      <div className="qbox-container">
        <div className="qbox-stats">
          <p className="stats">
            4 upvotes
          </p>
          <p className="stats">
            6 downvotes
          </p>
          <p className="stats">
            10 answers
          </p>
          <p className="stats">
            3 comments
          </p>
        </div>
        <div className="qbox-body">
          <div className="qbox-question">
            <Link to="answerspage">
              <h3 className="question-title">
                What is the difference between a statement and an expressoin?
              </h3>
            </Link>
          </div>
          <div className="user-info">
            <div className="avatar-container">
              <img className="user-avatar" src={avatar} alt="" />
            </div>
            <p className="user-name">@martinkiprotich</p>
          </div>
        </div>
      </div>
    </>
  );
}
