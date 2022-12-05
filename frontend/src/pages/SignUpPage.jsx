import React from "react";
import "../assets/styles/SignUpPage.css";
import { PrimaryButton } from "../components/ui/Buttons";

export default function SignUpPage() {
  return (
    <>
      <div className="signup-container">
        <div className="signup-section">
          <form className="signup-form">
            <h2 className="signup-title">SIGN UP</h2>
            <label className="label email-label" htmlFor="email-input">
              Email:
            </label>
            <input
              className="input email-input"
              type="email"
              name="signup-email"
              id="email-input"
              placeholder="enter email here..."
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
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
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <PrimaryButton>Sign Up</PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
