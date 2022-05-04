import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Welcome.css";

import { AppConfig } from "../../config/AppConfig";
import Footer from "../Footer/Footer";
import About from "../About/About";

export default function Welcome() {
  return (
    <>
      <About />

      <div id="realizations" className="welcome-component">
        <Container>
          <Row>
            <Col>
              <h1> {AppConfig("realizations").title} </h1>
              <h2> {AppConfig("realizations").descriptions} </h2>
            </Col>
          </Row>
          <Row>
            {AppConfig("realizations").projects.map((proj, pid) => (
              <Col md={4}>
                <div className="card m-2 p-2" key={pid}>
                  <h3> {proj.project_name} </h3>
                  <p> {proj.project_descriptions} </p>
                  <p> {proj.project_image} </p>
                  <p> {proj.project_url} </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div id="contact" className="welcome-component">
        <Container>
          <Row>
            <Col>
              <h1> {AppConfig("contact").title} </h1>
              <p> {AppConfig("contact").descriptions} </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
