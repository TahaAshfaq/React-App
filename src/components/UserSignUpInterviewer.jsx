import React from "react";
import "./userSignUp.css";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export function UserSignUpInterviewer() {
  return (
    <div className="mainuserSignup">
      <div className="maindiv">
        <img src={Logo} alt="" />
        <p>
          Already have an <span id="useraccount">interviewer account</span>
        </p>
        <div className="buttons">
          <Link to="/Alreadyaccinterviewer">
            <button id="UserSignUpB1">yes</button>
          </Link>
          <Link to="/SignUpFormInterviewer">
            <button id="UserSignUpB2">No</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
