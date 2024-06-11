import React from "react";
import "./jobBox.css";
import time from "../assets/time.svg";
import salary from "../assets/salary.svg";

function JobBox(props) {
  // console.log(props);
  return (
    <div className="jobBox">
      <div className="compjob">
        <div className="companyname">
          <h4>Company</h4>
          <p>{props.company}</p>
        </div>

        <div className="jobName">
          <h4>Job</h4>
          <p>{props.name}</p>
        </div>
      </div>

      <div className="JobDes">
        <h4>Jod description</h4>
        <p>{props.desc}</p>
      </div>
      <div className="jobPrice">
        <img src={salary} alt="" />
        <p>{props.price}</p>
      </div>
      <div className="jobTime">
        <img src={time} alt="" />
        <p>{props.time}</p>
      </div>
      <button>Apply for job</button>
    </div>
  );
}

export default JobBox;
