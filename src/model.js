// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   userName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   interest: { type: String, required: true },
// });

// export const User = mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  interest: { type: String, required: true },
});

const jobSchema = new mongoose.Schema(
  {
    companyname: { type: String, required: true },
    jobName: { type: String, required: true },
    jobDes: { type: String, required: true },
    jobPrice: { type: String, required: true },
    jobTime: { type: String, required: true },
  },
  { collection: "Jobs" }
);

const interviewerSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  workspace: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
export const Jobs = mongoose.model("Jobs", jobSchema);
export const Interviewer = mongoose.model("Interviewer", interviewerSchema);

