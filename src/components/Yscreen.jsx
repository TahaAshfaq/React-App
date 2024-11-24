import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./yscreen.css";
import JobBox from "./JobBox";
import userIcon from "../assets/user.svg";

export function Yscreen() {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();
  const { email, userName } = location.state || {};

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:2000/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <div className="outerdivY">
        <img src={userIcon} alt="" />
        <div id="innerdivY">
          <h5>{userName}</h5>
          <p>{email}</p>
        </div>
      </div>
      <div className="div2Yscreen">
        <p>JOBS AVAILABLE FOR YOU</p>
      </div>
      {jobs.map((job) => (
        <JobBox
          key={job._id}
          company={job.companyname}
          name={job.jobName}
          desc={job.jobDes}
          price={job.jobPrice}
          time={job.jobTime}
        />
      ))}
    </>
  );
}
