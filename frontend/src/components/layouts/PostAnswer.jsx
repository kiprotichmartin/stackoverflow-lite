import React from "react";
import "../../assets/styles/PostAnswer.css";
import { PrimaryButton } from "../ui/Buttons";

export default function PostAnswer() {
  return (
    <>
      <div className="postanswer-container">
        <div className="postanswer-section">
          <form className="postanswer-form">
            <label className="label answer-label" htmlFor="answer-input">
              Post your answer:
            </label>
            <textarea
              className="input answer-input"
              name="postanswer-text"
              id="answer-input"
              cols="30"
              rows="10"
              placeholder="enter answer here..."
            ></textarea>
            <PrimaryButton>Post Question</PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
