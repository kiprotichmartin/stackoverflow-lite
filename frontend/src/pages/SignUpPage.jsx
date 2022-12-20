import React, { useState } from "react";
import "../assets/styles/SignUpPage.css";
import { PrimaryButton } from "../components/ui/Buttons";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/features/users/usersActions";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = {
    Username: username,
    Email: email,
    Password: password,
    Avatar: avatar,
  };

  const login = sessionStorage.getItem("shouldLogin");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(signUpUser(formData));
    } else if (email === "" || password === "") {
      toast.warn("Enter email and password", { theme: "dark" });
    }
    if (login) {
      navigate("/login");
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setAvatar("");
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-section">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2 className="signup-title">SIGN UP</h2>
            <label className="label email-label" htmlFor="email-input">
              Username:
            </label>
            <input
              className="input username-input"
              type="text"
              name="signup-username"
              id="username-input"
              placeholder="enter username here..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="label email-label" htmlFor="email-input">
              Email:
            </label>
            <input
              className="input email-input"
              type="email"
              name="signup-email"
              id="email-input"
              placeholder="enter email here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label pwd-label" htmlFor="pwd-input">
              Password:
            </label>
            <input
              className="input pwd-input"
              type="password"
              name="signup-pwd"
              id="pwd-input"
              placeholder="enter password here..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label email-label" htmlFor="email-input">
              Avatar(link):
            </label>
            <input
              className="input avatar-input"
              type="url"
              name="signup-avatar"
              id="avatar-input"
              placeholder="enter avatar link here..."
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <PrimaryButton>Sign Up</PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
