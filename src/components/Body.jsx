import React, { useEffect, useRef } from "react";
import "./body.css";
import mobileVector from "../assets/Vector.svg";
import img1 from "../assets/Automation.svg.svg";
import img2 from "../assets/Themes.svg.svg";
import img3 from "../assets/AI-Integration.svg fill.svg";
import img4 from "../assets/User-roles.svg.svg";
import img5 from "../assets/section3ki_img.svg";
import img6 from "../assets/sec5img.svg";
import img7 from "../assets/sec6img.svg";
import circle from "../assets/circle.svg";

import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import animation1 from "../assets/inappchat.json";
import animation2 from "../assets/animation02.json";

import { gsap } from "gsap";

// import Model3D from "./Model3D";

export function Body() {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      p1Ref.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      p2Ref.current,
      { opacity: 0, y: +10 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);
 
  return (
    <body>
      {/* <div>
        <Model3D />
      </div> */}
      <div id="herotext">
        <p id="p1" className="pp" ref={p1Ref}>
          SOURCE | MANAGR | EVALUATE | ACCELERATE
        </p>

        <p id="p2" className="pp" ref={p2Ref}>
          <img src={circle} alt="" />
          10X faster hiring with
          <br />
          AI-powered <span id="autohire">AUTO HIRE</span>
        </p>
        <p id="p3" className="pp">
          The best applicant tracking system and recruiting software available,
          <br />
          designed to streamline the hiring process from source to hire.
        </p>
        <Link to="/UserSignUp">
          <button>Apply Now</button>
        </Link>
      </div>
      <div id="section2">
        <div id="blue">
          <div id="inblue">
            <h1>
              Experience the
              <br /> Power of AUTOHIRE <span>Today</span>
            </h1>
            <p>
              Whether you are an SME or a large enterprise, our scalable and
              unified HR
              <br />
              platform has a range of modules that can help you manage and
              optimize all
              <br />
              of your HR processes. We understand that your people are your most
              <br />
              valuable asset, and that’s why our platform adapts to your unique
              needs,
              <br />
              sensuring your HR operations are
              <br />
              as efficient and effective as possible.
            </p>
          </div>
        </div>

        <div id="pink">
          <img id="mobimg" src={mobileVector} alt="" />
        </div>
      </div>

      <div className="section3">
        <h1>
          <span id="save">Save</span> Your Precious Time
        </h1>
        <p id="section3p">
          Experience unparalleled efficiency in your day-to-day operations and
          unlock the true potential of your organization with our holistic HR
          solutions. Our comprehensive suite in HRango lets you monitor, analyze
          and track your company goals and empowers you to focus on strategic
          growth and innovation.
        </p>
        <div className="cards">
          <div className="card1">
            <img id="section3img1" src={img1} alt="" />
            <h3>Automations</h3>
            <p>
              Amplify your HR operations through multiple automation modules.
            </p>
          </div>
          <div className="card2">
            <img id="section3img2" src={img2} alt="" />
            <h3>Multiple Themes</h3>
            <p>
              Personalize your interface with HRango’s diverse theme options.
            </p>
          </div>
          <div className="card1">
            <img id="section3img3" src={img3} alt="" />
            <h3>AI Integrations</h3>
            <p>
              Connect with your favorite tools to get data-driven insights
              without any hassle.
            </p>
          </div>
          <div className="card2">
            <img id="section3img4" src={img4} alt="" />
            <h3>User Role</h3>
            <p>
              Tailor permissions and accessibility depending upon the employee’s
              role.
            </p>
          </div>
        </div>
      </div>

      <div className="section4">
        <h1>
          Apply for Jobs
          <br />
          That Suits Your <span id="interest">Interest</span>
        </h1>
        <img id="section4kiimg" src={img5} alt="" />
      </div>

      <div className="section5">
        <div className="sec6right">
          <div className="animation1">
            <Lottie animationData={animation1} />
          </div>
          <h1>
            In App Communication
            <br />
            with <span className="analysis">AutoHire</span>
          </h1>
          <p>
            The Communication Tools module within AutoHire offers a
            comprehensive suite of features designed to facilitate effective and
            efficient communication throughout the hiring process. With
            automated communication capabilities, recruiters can effortlessly
            send emails, SMS notifications, and reminders to candidates for
            various purposes such as interview invitations, updates on
            application status, and interview reminders.
          </p>
          <p>Automated Communication</p>
          <p>Real-time Support</p>
          <p>Multi-language Support</p>
        </div>
        <div id="sec5imgdiv">
          <img id="sec5img" src={img6} alt="" />
        </div>
      </div>

      <div className="section6">
        <div id="sec6imgdiv">
          <img id="sec6img" src={img7} alt="" />
        </div>
        <div className="sec5left">
          <div className="animation2">
            <Lottie animationData={animation2} />
          </div>
          <h1>
            Machine Learning
            <br />
            Algorithms for <span className="analysissec6">Analysis</span>
          </h1>
          <p>
            The Machine Learning Algorithms in AutoHire is a sophisticated tool
            designed to optimize candidate evaluation processes. Leveraging
            cutting-edge machine learning techniques, this module analyzes
            various aspects of candidate profiles to provide valuable insights
            to recruiters. Our Machine Learning Algorithms for revolutionizes
            the recruitment process by providing data-driven insights that
            enable recruiters to identify top talent effectively and
            efficiently.
          </p>
          <p>Predictive Job Fit</p>
          <p>Performance Prediction</p>
          <p>Behavioral Pattern Detection</p>
        </div>
      </div>
    </body>
  );
}
