import React from "react";
import { useSelector } from "react-redux";
import "../assets/styles/AnswersPage.css";
import AnswerBox from "../components/layouts/AnswerBox";
import CommentBox from "../components/layouts/CommentBox";
import PostAnswer from "../components/layouts/PostAnswer";
import QuestionBox from "../components/layouts/QuestionBox";

export default function AnswersPage() {
  const questions = useSelector((state) => state.questions.questions);

  return (
    <>
      <div className="answerpage-container">
        <div className="enclose-container">
          {questions &&
            questions.map((question) => (
              <QuestionBox key={question.QuestionID} questions={question} />
            ))}
          {/* <QuestionBox />
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

          <PostAnswer /> */}
        </div>
      </div>
    </>
  );
}
