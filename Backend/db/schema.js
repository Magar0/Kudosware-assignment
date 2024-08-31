const { profile } = require("console");
const mongoose = require("mongoose");

const resume = new mongoose.Schema({
  profile: {
    contact: String,
    email: String,
    github: String,
    linkedin: String,
    location: String,
    name: String,
    position: String,
    tagline: String,
    website: String,
  },
  education: [],
  experience: [],
  aboutMe: String,
  file: String,
});

const Resume = mongoose.model("Resume", resume);
module.exports = Resume;
