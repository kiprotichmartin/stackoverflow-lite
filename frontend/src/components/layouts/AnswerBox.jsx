import React from "react";
import "../../assets/styles/AnswerBox.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function AnswerBox() {
  return (
    <>
      <div className="ansbox-container">
        <div className="ans-votes">
          {/* <button className="upvote">+</button> */}
          <AiFillCaretUp />
          <p className="votenumber">10</p>
          <AiFillCaretDown />
          {/* <button className="downvote">-</button> */}
        </div>
        <div className="ans-text">
          <p>
            Expressions can contain expressions. For example, how many
            expressions do you count in this chunk of JS code? Make a guess, and
            then drag the slider to see them each highlighted:{" "}
            <span>by @martinkiprotich</span>
          </p>
        </div>
      </div>
    </>
  );
}
