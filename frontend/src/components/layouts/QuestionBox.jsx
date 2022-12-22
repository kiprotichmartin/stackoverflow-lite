import React from "react";
import "../../assets/styles/QuestionBox.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchOneQuestion } from "../../redux/features/questions/questionsActions";

export default function QuestionBox({ questions }) {
  const dispatch = useDispatch();

  const handleOneQuestion = () => {
    dispatch(fetchOneQuestion(questions.QuestionID));
  };

  return (
    <>
      <div key={questions.QuestionID} className="qbox-container">
        <div className="qbox-stats">
          {/* <p className="stats">4 votes</p> */}
          {/* <p className="stats">
            6 downvotes
          </p> */}
          <p className="stats">{questions.TotalAnswers} answers</p>
          {/* <p className="stats">3 comments</p> */}
        </div>
        <div className="qbox-body">
          <div className="qbox-question">
            <Link
              to={{
                pathname: `/answerspage/${questions.QuestionID}`,
                // state: { QuestionID: questions.QuestionID },
              }}
            >
              <h3 className="question-title" onClick={handleOneQuestion}>
                {/* What is the difference between a statement and an expressoin? */}
                {questions.Title}
              </h3>
            </Link>
            <p>{questions.Description}</p>
          </div>
          <div className="user-info">
            <div className="avatar-container">
              <img
                className="user-avatar"
                src={questions.Avatar}
                alt={questions.Username}
              />
            </div>
            <p className="user-name">@{questions.Username}</p>
          </div>
        </div>
      </div>
    </>
  );
}
