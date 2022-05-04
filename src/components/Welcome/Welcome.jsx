import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Welcome.css";

import { AppConfig } from "../../config/AppConfig";
import Footer from "../Footer/Footer";

export default function Welcome() {
  return (
    <>
      <div id="about" className="welcome-component">
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col>
                  <h1> {AppConfig("app").app_name} </h1>
                  <h2> {AppConfig("app").app_shortname} </h2>
                  <p> {AppConfig("app").app_descriptions} </p>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              {" "}
              <h1>Image ici</h1>{" "}
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h1> {AppConfig("skills").title} </h1>
              <h2> {AppConfig("skills").descriptions} </h2>
            </Col>
            {AppConfig("skills").technologies.map((tech, tid) => (
              <Col md={4}>
                <div className="card m-2 p-2" key={tid}>
                  <h3> {tech.techno_name} </h3>
                  <p> {tech.techno_descriptions} </p>
                  <p> {tech.techno_image} </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div id="portfolio" className="welcome-component">
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
