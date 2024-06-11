import React from "react";
import "./userSignUp.css";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export function UserSignUp() {
  return (
    <div className="mainuserSignup">
      <div className="maindiv">
        <img src={Logo} alt="" />
        <p>
          Already have a <span id="useraccount">candidate account</span>
        </p>
        <div className="buttons">
          <Link to="/Alreadyacc">
            <button id="UserSignUpB1">yes</button>
          </Link>
          <Link to="/SignUpForm">
            <button id="UserSignUpB2">No</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
