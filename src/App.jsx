import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Yscreen } from "./components/Yscreen";
import { SignUpForm } from "./components/SignUpForm";
import { Alreadyacc } from "./components/Alreadyacc";
import { UserSignUp } from "./components/UserSignUp";
import { Postjob } from "./components/Postjob";
import { Alreadyaccinterviewer } from "./components/Alreadyaccinterviewer";
import { UserSignUpInterviewer } from "./components/UserSignUpInterviewer";
import { SignUpFormInterviewer } from "./components/SignUpFormInterviewer";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route />
        <Route path="/UserSignUp" element={<UserSignUp />} />
        <Route />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route />
        <Route />
        <Route path="/Yscreen" element={<Yscreen />} />
        <Route />
        <Route path="/Postjob" element={<Postjob />} />
        <Route />
        <Route
          path="/Alreadyaccinterviewer"
          element={<Alreadyaccinterviewer />}
        />
        <Route />
        <Route
          path="/UserSignUpInterviewer"
          element={<UserSignUpInterviewer />}
        />
        <Route />
        <Route
          path="/SignUpFormInterviewer"
          element={<SignUpFormInterviewer />}
        />
        <Route />
        <Route path="/Alreadyacc" element={<Alreadyacc />} />
      </Routes>
      <Footer />
    </div>
  );
}
