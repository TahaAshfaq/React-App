import React from "react";
import Logo from "../assets/Logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="mainHeader">
      <div className="headabove">
        <p>Unlock your potential with ATS: Where talent meets opportunity!</p>
      </div>
      <div className="head">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <Link to="/UserSignUpInterviewer">
          <button className="intButton">INTERVIEWER</button>
        </Link>
      </div>
    </header>
  );
}
