import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../../assets/styles/PostAnswer.css";
import { fetchAnswers, postAnswer } from "../../redux/features/answers/answersActions";
import { PrimaryButton } from "../ui/Buttons";

export default function PostAnswer() {
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { QuestionID } = useParams();

  const userid = sessionStorage.getItem("userid");
  const username = sessionStorage.getItem("username");

  const formData = {
    QuestionID: QuestionID,
    UserID: userid,
    Username: username,
    Description: description,
    Votes: 0,
    TotalComments: 0,
    PreferredAnswer: 0,
    isDeleted: 0,
  };

  const handlePASubmit = (e) => {
    e.preventDefault();
    if (description !== "") {
      dispatch(fetchAnswers(QuestionID));
      dispatch(postAnswer(formData));
    } else if (description === "") {
      toast.warn("Enter description", { theme: "dark" });
    }
    setDescription("");
  };

  return (
    <>
      <div className="postanswer-container">
        <div className="postanswer-section">
          <form className="postanswer-form" onSubmit={handlePASubmit}>
            <label className="label answer-label" htmlFor="answer-input">
              Post your answer:
            </label>
            <textarea
              className="input answer-input"
              name="postanswer-text"
              id="answer-input"
              cols="30"
              rows="10"
              placeholder="enter answer here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <PrimaryButton>Post Answer</PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
