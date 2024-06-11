import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import animation from "../assets/intervieweranimation.json";
import Aidescription from "../assets/Aidescription.json";

import Lottie from "lottie-react";
import "./postjob.css";

// ----------------------------------------------------------------------------
import { GoogleGenerativeAI } from "@google/generative-ai";
// ----------------------------------------------------------------------------

export function Postjob() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const Navigation = () => {
    navigate("/Body");
  };
  const [postformData, setpostFormData] = useState({
    companyname: "",
    jobName: "",
    jobDes: "",
    jobPrice: "",
    jobTime: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setpostFormData({
      ...postformData,
      [name]: value,
    });
    console.log(name, value);
  };
  // ----------------------------------------------------------------------------
  const API_KEY = "AIzaSyDihMcsfjM40AlGVeVrytEUQtvF6VF0MKg";
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  async function fetchDataFromGeminiAPI() {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const job = postformData.jobName;

      const prompt = `Write a short description of approximately 20 word about the roles of an individual in job : ${job}`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setLoading(false);
      setData(text);
      setpostFormData((prevData) => ({
        ...prevData,
        jobDes: text,
      }));
    } catch (error) {
      setLoading(false);
      console.log("fetchDataFromGeminiAPI error: ", error);
    }
  }
  // ----------------------------------------------------------------------------
  const submit = async (event) => {
    event.preventDefault();

    console.log(postformData);
    try {
      const response = await fetch("http://localhost:2000/postjob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postformData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("job saved:", data);
      } else {
        setErr(true);
        alert("Error saving job.");
        console.error("Error saving user:", response.statusText);
      }
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="PostJob">
      <h1 id="mainheading">
        POST A JOB TO <span id="mainheadingspan">FIND</span> COMPATITIVE
        CANDIDATES !
      </h1>
      <div className="animation">
        <Lottie animationData={animation} />
      </div>
      <form className="Postjobform">
        <h5 id="Company">Company Name</h5>

        <input
          type="text"
          name="companyname"
          placeholder="Enter your company name"
          className="Postforminput"
          required
          value={postformData.companyname}
          onChange={handleChange}
        />
        <h5>Job name</h5>

        <input
          type="text"
          name="jobName"
          placeholder="Creat a job"
          className="Postforminput"
          required
          value={postformData.jobName}
          onChange={handleChange}
        />
        <h5>
          Salary/hour
          <span id="Postjobspan">
            (Salary must in American dollars and per hour)
          </span>
        </h5>

        <input
          type="text"
          name="jobPrice"
          placeholder="Enter Salary"
          required
          className="Postforminput"
          value={postformData.jobPrice}
          onChange={handleChange}
        />
        <h5>Job description</h5>
        <div id="aidescription">
          <input
            id="aidescription_input"
            type="text"
            name="jobDes"
            placeholder="write a short description"
            className="Postforminput"
            required
            value={postformData.jobDes}
            onChange={handleChange}
          />
          <button disabled={loading} onClick={fetchDataFromGeminiAPI}>
            {" "}
            {loading ? (
              <div style={{ height: "20px", width: "130px" }}>
                <Lottie
                  animationData={Aidescription}
                  loop
                  autoplay
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "-31px",
                    marginLeft: "-5px",
                  }}
                />
                <span
                  style={{
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    left: "49%",
                    transform: "translate(-50%, -50%)",
                    marginLeft:"25px"
                  }}
                >
                  Loading...
                </span>
              </div>
            ) : (
              "Generate with AI"
            )}
          </button>
        </div>

        <h5>Jobs timings</h5>
        <select
          id="text"
          name="jobTime"
          required
          value={postformData.jobTime}
          onChange={handleChange}
        >
          <option value="">set job timings</option>
          <option value="9am - 5pm">9am - 5pm</option>
          <option value="6am - 2pm">6am - 2pm</option>
          <option value="10am - 8pm">10am - 8pm</option>
        </select>

        <div id="buttons">
          <button id="PostjobB1" onClick={Navigation}>
            Cancel
          </button>
          <button id="PostjobB2" onClick={submit}>
            Post job
          </button>
        </div>
      </form>
    </div>
  );
}
