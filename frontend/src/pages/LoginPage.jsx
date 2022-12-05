import React from "react";
import { useState } from "react";
import "../assets/styles/LoginPage.css";
import { PrimaryButton } from "../components/ui/Buttons";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" || password !== "") {
      // toast.success("Login Successful", { theme: "dark" });
    }
    // toast.warn("Enter email and password", { theme: "dark" });
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-section">
          <form className="signup-form">
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
            <PrimaryButton onClick={() => handleSubmit()}>Login</PrimaryButton>
          </form>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}
