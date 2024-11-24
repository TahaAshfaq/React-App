import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { User, Jobs, Interviewer } from "./model.js"; // Ensure the path to your model is correct

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Taha9753:Unchartered3.@tahacluster.wxaybwk.mongodb.net/mydb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`The DB is connected with ${mongoose.connection.host}`);
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

connectDB();

app.post("/submitform", async (req, res) => {
  const { userName, email, password, interest } = req.body;
  const user = new User({
    userName,
    email,
    password,
    interest,
  });
  try {
    const data = await user.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

app.post("/submitforminterviewer", async (req, res) => {
  const { userName, email, password, workspace } = req.body;
  const interviewer = new Interviewer({
    userName,
    email,
    password,
    workspace,
  });
  try {
    const data = await interviewer.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

app.post("/postjob", async (req, res) => {
  const { companyname, jobName, jobDes, jobPrice, jobTime } = req.body;
  const postajob = new Jobs({
    companyname,
    jobName,
    jobDes,
    jobPrice,
    jobTime,
  });
  try {
    const data = await postajob.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

// Define the route to fetch jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

app.get("/auth", async (req, res) => {
  try {
    const auth = await User.find();
    res.status(200).json(auth);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

app.get("/authinterviewer", async (req, res) => {
  try {
    const authinterviewer = await Interviewer.find();
    res.status(200).json(authinterviewer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;

