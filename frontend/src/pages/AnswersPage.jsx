import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/AnswersPage.css";
import AnswerBox from "../components/layouts/AnswerBox";
// import CommentBox from "../components/layouts/CommentBox";
import PostAnswer from "../components/layouts/PostAnswer";
import QuestionBox from "../components/layouts/QuestionBox";
import { fetchAnswers } from "../redux/features/answers/answersActions";

export default function AnswersPage() {
  const questions = useSelector((state) => state.questions.questions);
  const answers = useSelector((state) => state.answers.answers);
  // const loading = useSelector((state) => state.answers.loading);
  // const error = useSelector((state) => state.answers.error);
  // const comments = useSelector((state) => state.comments.comments);

  const dispatch = useDispatch();

  let id = questions[0].QuestionID;
  useEffect(() => {
    dispatch(fetchAnswers(id));
    console.log(id);
  }, []);

  // const handleAns = () => [
  //   dispatch(fetchAnswers(id))
  // ]

  return (
    <>
      <div className="answerpage-container">
        <div className="enclose-container">
          {questions &&
            questions.map((question) => (
              <QuestionBox key={question.QuestionID} questions={question} />
            ))}
          <h4>Answers:</h4>
          {answers.map((answer) => (
            <AnswerBox key={answer.AnswerID} answers={answer} />
          ))}
          <h4>Comment:</h4>
          {/* <CommentBox /> */}
          {/* <CommentBox /> */}

          <PostAnswer />
        </div>
      </div>
    </>
  );
}
