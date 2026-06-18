const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ================= JOBS DATA =================

let jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Infosys",
    location: "Hyderabad",
    category: "Frontend"
  },
  {
    id: 2,
    title: "Java Developer",
    company: "TCS",
    location: "Bangalore",
    category: "Java"
  },
  {
    id: 3,
    title: "Python Developer",
    company: "Wipro",
    location: "Chennai",
    category: "Python"
  }
];

// ================= STUDENTS DATA =================

let students = [];

// ================= HOME =================

app.get("/", (req, res) => {
  res.send("CareerConnect API Running");
});

// ================= GET ALL JOBS =================

app.get("/jobs", (req, res) => {
  res.json(jobs);
});

// ================= GET JOB BY ID =================

app.get("/jobs/:id", (req, res) => {

  const job = jobs.find(
    j => j.id === parseInt(req.params.id)
  );

  if (!job) {
    return res.status(404).json({
      message: "Job Not Found"
    });
  }

  res.json(job);
});

// ================= ADD JOB =================

app.post("/jobs", (req, res) => {

  const {
    id,
    title,
    company,
    location,
    category
  } = req.body;

  if (
    !id ||
    !title ||
    !company ||
    !location ||
    !category
  ) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  jobs.push({
    id,
    title,
    company,
    location,
    category
  });

  res.status(201).json({
    message: "Job Added Successfully"
  });
});

// ================= GET STUDENTS =================

app.get("/students", (req, res) => {
  res.json(students);
});

// ================= REGISTER STUDENT =================

app.post("/students", (req, res) => {

  const {
    username,
    branch,
    skills
  } = req.body;

  if (
    !username ||
    !branch ||
    !skills
  ) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  students.push({
    username,
    branch,
    skills
  });

  res.status(201).json({
    message: "Student Registered Successfully"
  });
});

// ================= START SERVER =================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});