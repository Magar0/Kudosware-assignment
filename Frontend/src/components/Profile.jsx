import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MdEdit, MdClose } from "react-icons/md";
import { BsGithub, BsLinkedin, BsGlobe } from "react-icons/bs";
import {
  HiLocationMarker,
  HiOfficeBuilding,
  HiOutlineMail,
  HiPhone,
} from "react-icons/hi";
import { setProfile } from "../store/slices/ProfileSlice";
import { setFile } from "../store/slices/FileSlice";

function Profile() {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const file = useSelector((state) => state.file);

  function handleFile(e) {
    dispatch(setFile(URL.createObjectURL(e.target.files[0])));
  }

  const handleProfile = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setProfile({ name, value }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlertHide = () => {
    setProfileName("");
    setProfileURL("");
    setAlert(false);
  };
  const handleAlertShow = (Profile, Link) => {
    setProfileName(Profile);
    setProfileURL(Link);
    setAlert(true);
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col
          md={8}
          sm={12}
          className="d-flex justify-content-between img-column"
        >
          <MdEdit
            size={30}
            className="rounded edit cursor-pointer mt-auto ms-auto "
            onClick={handleShow}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-2">
        <Col md={4} sm={6}>
          <Col>
            <h4>{profile?.name ? profile.name : "Your Name"}</h4>
          </Col>
          <Col className="d-flex justify-content-start">
            <HiLocationMarker size={30} className="p-1" />
            <p className="p-1 m-0">
              {profile?.location ? profile?.location : "City Name"}
            </p>
            <HiOfficeBuilding size={30} className="p-1" />
            <p className="p-1 m-0">
              {profile?.position ? profile.position : "Your Position"}
            </p>
          </Col>
          <Col>
            <p className="px-2">
              {profile?.tagline
                ? profile.tagline
                : "Describe yourself in one line"}
            </p>
          </Col>
        </Col>
        <Col md={4} sm={6} className="d-flex flex-wrap">
          <p
            className="p-1 m-0 cursor-pointer"
            onClick={() =>
              handleAlertShow("LinkedIn Profile", profile.linkedin)
            }
          >
            <BsLinkedin size={30} className="p-1" />
            LinkedIn
          </p>
          <p
            className="p-1 m-0 cursor-pointer"
            onClick={() => handleAlertShow("GitHub Profile", profile.github)}
          >
            <BsGithub size={30} className="p-1" />
            GitHub
          </p>
          <p
            className="p-1 m-0 cursor-pointer"
            onClick={() => handleAlertShow("Portfolio", profile.website)}
          >
            <BsGlobe size={30} className="p-1" />
            Portfolio
          </p>
          <p
            className="p-1 m-0 cursor-pointer"
            onClick={() => handleAlertShow("Email Address", profile.email)}
          >
            <HiOutlineMail size={30} className="p-1" />
            Email
          </p>
          <p
            className="p-1 m-0 cursor-pointer"
            onClick={() => handleAlertShow("Contact Number", profile.contact)}
          >
            <HiPhone size={30} className="p-1" />
            Contact Number
          </p>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Profile Details</Modal.Title>
          <MdClose size={30} className="rounded edit" onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                size="sm"
                placeholder="Your Name"
                value={profile.name}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="location"
                size="sm"
                placeholder="City, Country"
                value={profile.location}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="position"
                size="sm"
                placeholder="Your Position"
                value={profile.position}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="tagline"
                size="sm"
                placeholder="Describe yourself in one line"
                value={profile.tagline}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                size="sm"
                placeholder="Email Address"
                value={profile.email}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="contact"
                size="sm"
                placeholder="Contact Number"
                value={profile.contact}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="github"
                size="sm"
                placeholder="GitHub Profile"
                value={profile.github}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="linkedin"
                size="sm"
                placeholder="LinkedIn Profile"
                value={profile.linkedin}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="website"
                size="sm"
                placeholder="Your Portfolio Website"
                value={profile.website}
                onChange={handleProfile}
              />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" size="sm" onChange={handleFile} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <button
            type="submit"
            className="rounded edit px-2"
            onClick={handleClose}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={alert} onHide={handleAlertHide}>
        <Modal.Header>
          <Modal.Title>{profileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{profileURL}</Modal.Body>
      </Modal>
    </>
  );
}

export default Profile;
