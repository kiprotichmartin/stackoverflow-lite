import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../assets/styles/AnswersPage.css";
import AnswerBox from "../components/layouts/AnswerBox";
// import CommentBox from "../components/layouts/CommentBox";
import PostAnswer from "../components/layouts/PostAnswer";
import QuestionBox from "../components/layouts/QuestionBox";
import { fetchAnswers } from "../redux/features/answers/answersActions";
import { fetchOneQuestion } from "../redux/features/questions/questionsActions";

export default function AnswersPage() {
  const oneQuestion = useSelector((state) => state.questions.oneQuestion);
  const answers = useSelector((state) => state.answers.answers);
  // const loading = useSelector((state) => state.answers.loading);
  // const error = useSelector((state) => state.answers.error);
  // const comments = useSelector((state) => state.comments.comments);

  const dispatch = useDispatch();
  const { QuestionID } = useParams();

  useEffect(() => {
    dispatch(fetchAnswers(QuestionID));
    dispatch(fetchOneQuestion(QuestionID));
  }, [dispatch, QuestionID]);

  return (
    <>
      <div className="answerpage-container">
        <div className="enclose-container">
          {oneQuestion &&
            oneQuestion.map((question) => (
              <QuestionBox key={question.QuestionID} questions={question} />
            ))}
          <h4>Answers:</h4>
          {/* {console.log(answers)} */}
          {answers &&
            answers.map((answer) => (
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
