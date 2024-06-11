import React, { useState, useEffect } from "react";
import "./Alreadyacc.css";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { set } from "mongoose";

export function Alreadyaccinterviewer() {
  const navigate = useNavigate();
  const [user, setuser] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchusers = async () => {
      try {
        // Fetch jobs data from the backend when the component mounts
        const response = await fetch("http://localhost:2000/authinterviewer");
        // console.log(response.data);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        // Set the fetched jobs data in the state
        // console.log(data);
        setuser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchusers();
  }, []);

  const handelSubmit = (event) => {
    let found = false;
    event.preventDefault();
    console.log("User submitted:", formData);
    console.log("Data form DB:", user);
    user.forEach((userdb) => {
      if (
        formData.email === userdb.email &&
        formData.password === userdb.password
      ) {
        found = true;
      }
    });
    if (found) {
      navigate("/Postjob");
    } else {
      console.log("user NOT FOUND!!!!");
    }
  };

  return (
    <div className="ac_mainuserSignup">
      <div className="ac_maindiv">
        <img src={Logo} alt="" />
        <form className="ac_actualform">
          <h5>Email</h5>
          <input
            className="ac_forminput"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <h5 id="pass">Password</h5>
          <input
            className="ac_forminput"
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </form>
        <p>
          Don't have an <span id="ac_useraccount">interviewer account</span>
        </p>
        <div className="ac_buttons">
          {/* <Link to="/Yscreen"> */}
          <button type="submit" id="ac_UserSignUpB2" onClick={handelSubmit}>
            Go to my workspace
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
