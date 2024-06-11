import React, { useState } from "react";
import "./signUpForm.css";
import ad1 from "../assets/ad1.svg";
import ad2 from "../assets/ad2.svg";
import google from "../assets/google.svg";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
  const [err, setErr] = useState(false);
  // State for form inputs
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    interest: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submission = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:2000/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User saved:", data);
        navigate("/Yscreen");
      } else {
        setErr(true);
        alert("email exist already.");
        console.error("Error saving user:", response.statusText);
      }
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div id="SignUpForm">
      <div className="signupformleft">
        <h5>CANDIDATE</h5>
        <img src={ad2} alt="" />
        <img src={ad1} alt="" />
        <div className="googlesignup">
          <h5>Sign Up with</h5>
          <img id="google" src={google} alt="" />
        </div>
      </div>
      <div className="signupformright">
        {err && <p>Email already exist try another one.</p>}
        <form className="actualform" onSubmit={submission}>
          <h3>Enter Details</h3>
          <h5>UserName</h5>
          <input
            type="text"
            name="userName"
            className="forminput"
            required
            value={formData.userName}
            onChange={handleChange}
          />

          <h5>Email</h5>
          <input
            type="email"
            name="email"
            required
            className="forminput"
            value={formData.email}
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            className="forminput"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <h5>Tell Us About Your Interest</h5>
          <input
            type="text"
            name="interest"
            className="forminput"
            value={formData.interest}
            onChange={handleChange}
            required
          />

          <p>
            By proceeding, you confirm that you have read and agree to <br />
            Privacy Notice.
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
