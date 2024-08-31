const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
const Resume = require("./db/schema");

dotEnv.config();
dbConnect();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Api is working" });
});

app.post("/resume", async (req, res) => {
  try {
    const data = req.body;
    const response = await Resume.create(data);
    console.log(response);
    //   const data =
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error occured" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
