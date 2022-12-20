import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { /*connect,*/ useDispatch, useSelector } from "react-redux";
import "../assets/styles/InitialPage.css";
import QuestionBox from "../components/layouts/QuestionBox";
import { PrimaryButton } from "../components/ui/Buttons";
import { fetchQuestions, searchQuestions } from "../redux/features/questions/questionsActions";

function InitialPage(/*{ questionsData, fetchQuestions, searchQuestions }*/) {
  const questions = useSelector((state) => state.questions.questions);
  const loading = useSelector((state) => state.questions.loading);
  const error = useSelector((state) => state.questions.error);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(" ");

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    // if (!search === "") {
      dispatch(searchQuestions(search));
    // }
    console.log(search);
  };

  if (loading) {
    return <h3 style={{ color: "#white" }}>Loading...</h3>;
  } else if (error) {
    return <h4 style={{ color: "white" }}>{error}</h4>;
  } else {
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
                value={search}
                onChange={handleSearch}
              />
              <Link to="askquestion">
                <PrimaryButton>Ask Question</PrimaryButton>
              </Link>
            </section>
            {/* {questionsData &&
            questionsData.questions &&
            questionsData.questions.map((question) => (
              <QuestionBox key={question.QuestionID} questions={question} />
            ))} */}
            {questions &&
              questions.map((question) => (
                <QuestionBox key={question.QuestionID} questions={question} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     questionsData: state.questions,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // fetchQuestions: () => dispatch(fetchQuestions()),
//     searchQuestions: (searchterm) => dispatch(searchQuestions(searchterm)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(InitialPage);
export default InitialPage;
