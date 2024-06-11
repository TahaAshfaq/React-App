import React from "react";
import "./footer.css";
import Logo from "../assets/Logofooter.svg";
import Li from "../assets/LinkedIn.svg";
import insta from "../assets/Insta.svg";
import fb from "../assets/fb.svg";
import X from "../assets/X.svg";
import Footerimg1 from "../assets/Footerimg1.svg";
import Footerimg2 from "../assets/Footerimg2.svg";

export function Footer() {
  return (
    <>
      <div id="foot">
        <div id="Fdiv0">
          <img id="Logo" src={Logo} alt="" />
          <p>
            An End-to-end HR Management Software that <br /> aligns with your
            company goals.
          </p>
          <div id="Fdiv0inner">
            <img className="Footerimg" src={Li} alt="" />
            <img className="Footerimg" src={insta} alt="" />
            <img className="Footerimg" src={fb} alt="" />
            <img className="Footerimg" src={X} alt="" />
          </div>
        </div>
        <div className="Fdiv1">
          <p className="toolsandtechnologies">Tools & Tech</p>
          <ul>
            <li>
              <a className="foot" href="#">
                Node JS
              </a>
            </li>
            <li>
              <a href="#">React</a>
            </li>
            <li>
              <a href="#">MongoDB</a>
            </li>
            <li>
              <a href="#">Express Js</a>
            </li>
            <li>
              <a href="#">GSAP</a>
            </li>
            <li>
              <a href="#">Spline</a>
            </li>
          </ul>
        </div>
        <div className="Fdiv1">
          <p className="toolsandtechnologies">About me</p>
          <ul>
            <li>
              <a href="#">COMSATS</a>
            </li>
            <li>
              <a href="#">SDA Project</a>
            </li>
            <li>
              <a href="#">BSE Semester 04</a>
            </li>
            <li>
              <a className="foot" href="#">
                Name Taha Ashfaq
              </a>
            </li>
            <li>
              <a href="#">Roll no. (FA22-BSE-055)</a>
            </li>

            <li>
              <a href="#">Submitted to Dr. Tehseen</a>
            </li>
          </ul>
        </div>
        <div className="Fdiv1">
          <p className="toolsandtechnologies">Our App</p>
          <ul>
            <li>
              <a className="foot" href="#">
                <div id="appdownloadimgs">
                  <img className="Footerimg" src={Footerimg1} alt="" />
                  <img className="Footerimg" src={Footerimg2} alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="end">SDA Final Semester Project</div>
    </>
  );
}
