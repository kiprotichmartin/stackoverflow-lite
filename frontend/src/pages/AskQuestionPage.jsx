import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import "../assets/styles/AskQuestionPage.css";
import { PrimaryButton, SecondaryButton } from "../components/ui/Buttons";
import { postQuestion } from "../redux/features/questions/questionsActions";

export default function AskQuestionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const userid = sessionStorage.getItem("userid");
  const username = sessionStorage.getItem("username");

  const formData = {
    UserID: userid,
    Username: username,
    Title: title,
    Description: description,
    TotalAnswers: 7,
    isDeleted: 0,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      dispatch(postQuestion(formData));
    } else if (title === "" || description === "") {
      toast.warn("Enter title and description", { theme: "dark" });
    }
    // if (auth) {
    //   navigate("/");
    // }
    // setTitle("");
    // setDescription("");
  };

  return (
    <>
      <div className="askq-container">
        <div className="askq-section">
          <form className="askq-form" onSubmit={handleSubmit}>
            <h2 className="askq-title">Ask Your Question</h2>
            <label className="label title-label" htmlFor="title-input">
              Question Title:
            </label>
            <input
              className="input title-input"
              type="text"
              name="askq-title"
              id="title-input"
              placeholder="enter title here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label
              className="label description-label"
              htmlFor="description-input"
            >
              Question Description:
            </label>
            <textarea
              className="input description-input"
              name="askq-description"
              id="description-input"
              cols="30"
              rows="10"
              placeholder="enter description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <PrimaryButton>Post Question</PrimaryButton>
            {/* <Link to="login">
              <PrimaryButton>Login</PrimaryButton>
            </Link>
            <Link to="initialpage">
              <SecondaryButton>Cancel</SecondaryButton>
            </Link> */}
            <SecondaryButton>Cancel</SecondaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
