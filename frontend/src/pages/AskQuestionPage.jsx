import React from "react";
import "../assets/styles/AskQuestionPage.css";
import { PrimaryButton, SecondaryButton } from "../components/ui/Buttons";

export default function AskQuestionPage() {
  return (
    <>
      <div className="askq-container">
        <div className="askq-section">
          <form className="askq-form">
            <h2 className="askq-title">Ask Your Question</h2>
            <label className="label title-label" htmlFor="title-input">
              Question Title:
            </label>
            <input
              className="input title-input"
              type="text"
              name="askq-title"
              id="title-input"
              placeholder="enter title here..."
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="label description-label"
              htmlFor="description-input"
            >
              Question Description:
            </label>
            <textarea
              className="input description-input"
              name="askq-description"
              id="description-input"
              cols="30"
              rows="10"
              placeholder="enter description here..."
            ></textarea>
            <PrimaryButton>Post Question</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
