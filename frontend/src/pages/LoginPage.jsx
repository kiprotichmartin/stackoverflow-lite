import React from "react";
import { useState } from "react";
import "../assets/styles/LoginPage.css";
import { PrimaryButton } from "../components/ui/Buttons";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signInUser } from "../redux/features/users/usersActions";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = {
    Email: email,
    Password: password,
  };

  const auth = sessionStorage.getItem("auth");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(signInUser(formData));
    } else if (email === "" || password === "") {
      toast.warn("Enter email and password", { theme: "dark" });
    }
    if (auth) {
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-section">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2 className="signup-title"> LOGIN</h2>
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
            <PrimaryButton>Login</PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
