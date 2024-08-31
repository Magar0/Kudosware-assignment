import Container from "react-bootstrap/Container";
import Profile from "../components/Profile";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

const Resume = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { profile, file, aboutMe, skills, experience, education } = useSelector(
    (state) => state
  );

  const showError = (text = true) => {
    setError(text);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const handleSubmit = async () => {
    if (
      !profile.name &&
      !profile.email &&
      !profile.contact &&
      !profile.position
    ) {
      return showError("Please fill name, email, contact and position");
    }
    setLoading(true);
    try {
      const data = { profile, file, aboutMe, skills, experience, education };
      const res = await fetch(`${process.env.REACT_APP_URL}/resume`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const responseData = await res.json();
        console.log(responseData);
        setLoading(false);
        navigate("/success");
      } else {
        showError();
        setLoading(false);
      }
    } catch (err) {
      console.log(err);

      showError();
      setLoading(false);
    }
  };

  return (
    <>
      {/* Top image */}
      <Container fluid className="p-0 top-image" />
      <Container className="bg-white">
        {/* Profile section */}
        <Profile />

        {/* About section */}
        <AboutMe />

        <Experience />

        <Education />

        <Skills />
        {error && (
          <p className="text-danger text-center m-0">
            {error === true ? "Error sending resume" : error}
          </p>
        )}

        <div className="d-grid col-2 mx-auto mb-4 mt-1 text-center">
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <FiLoader
                color="white"
                size="1.5em"
                className="loading-animate"
              />
            ) : (
              "Upload Resume"
            )}
          </button>
        </div>
      </Container>
    </>
  );
};

export default Resume;
