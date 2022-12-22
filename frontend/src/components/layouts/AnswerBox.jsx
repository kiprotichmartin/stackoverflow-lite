import React from "react";
import "../../assets/styles/AnswerBox.css";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  // AiFillDelete,
  AiFillStar,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  downvote,
  PreferredAnswer,
  upvote,
} from "../../redux/features/answers/answersActions";

export default function AnswerBox({ answers }) {

  const dispatch = useDispatch();

  const handlePreferredAnswer = (answerid) => {
    dispatch(PreferredAnswer(answerid));
  };
  const handleUpvote = (answerid) => {
    dispatch(upvote(answerid));
  };
  const handleDownvote = (answerid) => {
    dispatch(downvote(answerid));
  };
  return (
    <>
      <div className="ansbox-container">
        <div className="ans-votes">
          {/* <button className="upvote">+</button> */}
          <AiFillCaretUp onClick={() => handleUpvote(answers.AnswerID)} />
          <p className="votenumber">{answers.Votes}</p>
          <AiFillCaretDown onClick={() => handleDownvote(answers.AnswerID)} />
          {/* <button className="downvote">-</button> */}
          <AiFillStar onClick={() => handlePreferredAnswer(answers.AnswerID)} />
          {/* <AiFillDelete onClick={handleDownvote} /> */}
        </div>
        <div className="ans-text">
          <p>
            {answers.Description}
            <span>by @{answers.Username}</span>
          </p>
        </div>
        {/* <div className="ans-actions">
            <AiFillStar />
            <AiFillDelete />
          </div> */}
      </div>
    </>
  );
}
