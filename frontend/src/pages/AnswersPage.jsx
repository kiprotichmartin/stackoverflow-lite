import React from "react";
import "../assets/styles/AnswersPage.css";
import AnswerBox from "../components/layouts/AnswerBox";
import CommentBox from "../components/layouts/CommentBox";
import PostAnswer from "../components/layouts/PostAnswer";
import QuestionBox from "../components/layouts/QuestionBox";

export default function AnswersPage() {
  return (
    <>
      <div className="answerpage-container">
        <div className="enclose-container">
          <QuestionBox />
          <h4>Answers:</h4>
          <AnswerBox />
          <h4>Comments:</h4>
          <CommentBox />
          <CommentBox />

          <AnswerBox />
          <h4>Comments:</h4>
          <CommentBox />
          <CommentBox />

          <AnswerBox />
          <h4>Comments:</h4>
          <CommentBox />
          <CommentBox />

          <PostAnswer />
        </div>
      </div>
    </>
  );
}
