import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/styles/InitialPage.css";
import QuestionBox from "../components/layouts/QuestionBox";
import { PrimaryButton } from "../components/ui/Buttons";
import { fetchQuestions } from "../redux/features/questions/questionsActions";
import { searchQuestions } from "../redux/features/questions/questionsActions";
import { fetchAnswers } from "../redux/features/answers/answersActions";
import { fetchComments } from "../redux/features/comments/commentsActions";

function InitialPage({ questionsData, fetchQuestions, searchQuestions }) {
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetchQuestions();
  //   // fetchAnswers();
  //   // fetchComments();
  // }, []);

  const handleSearch = (searchterm) => {
    searchQuestions(searchterm);
    // console.log(searchterm);
  }

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
              value={(e) => setSearch(e.target.value)}
              onChange={handleSearch(search)}
            />
            <Link to="askquestion">
              <PrimaryButton>Ask Question</PrimaryButton>
            </Link>
          </section>
          {questionsData &&
            questionsData.questions &&
            questionsData.questions.map((question) => (
              <QuestionBox key={question.QuestionID} questions={question} />
            ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    questionsData: state.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
    searchQuestions: (searchterm) => dispatch(searchQuestions(searchterm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage);
