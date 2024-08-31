import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section>
      <Container style={{ height: "100vh" }}>
        <div
          className="d-flex font-semibold justify-content-center align-items-center h-100 fs-2"
          style={{ height: "100vh" }}
        >
          <p style={{ maxWidth: "800px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            suscipit assumenda incidunt odio corporis odit ipsam ipsa architecto
            consectetur. Itaque excepturi repudiandae accusantium ut voluptatem
            molestias repellat enim quasi laborum?
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
