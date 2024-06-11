import React, { useEffect, useState } from "react";
import "./yscreen.css";
import JobBox from "./JobBox";
import user from "../assets/user.svg";

export function Yscreen() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Fetch jobs data from the backend when the component mounts
        const response = await fetch("http://localhost:2000/jobs");
        // console.log(response.data);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        // Set the fetched jobs data in the state
        // console.log(data);
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
        <img src={user} alt="" />
        <div id="innerdivY">
          <h5>Username</h5>
          <p>Email</p>
        </div>
      </div>
      <div className="div2Yscreen">
        <p>JOBS AVAILABLE FOR YOU</p>
      </div>
      {/* Map over the fetched jobs array and render JobBox for each job */}
      {jobs.map((job) => (
        <JobBox
          key={job._id} // Use the job's MongoDB _id as the key
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
