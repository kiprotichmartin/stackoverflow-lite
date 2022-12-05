import "../../assets/styles/Buttons.css";
import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button className="btn btn-primary" type="submit">{children}</button>
    </>
  );
};

const SecondaryButton = ({ children }) => {
  return (
    <>
      <button className=" btn btn-secondary" type="submit">{children}</button>
    </>
  );
};

export { PrimaryButton, SecondaryButton };
