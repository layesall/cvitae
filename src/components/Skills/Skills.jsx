import React from "react";
import "./Skills.css";
import { AppConfig } from "../../config/AppConfig";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = AppConfig("skills");
  const technos = skills.technologies;

  return (
    <div id="skills" className="skills-component">
      <Container>
        <Row>
          <Col>
            <h1 className="app-section-title">
              <FaTools /> {skills.title}
            </h1>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          {technos.map((tech, tid) => (
            <Col sm={3} key={tid}>
              <div className="techno-card">
                <Image
                  src={require("../../assets/skills/" + tech.image)}
                  alt={"techno: " + tech.name}
                  className="techno-card-image"
                />
                <h2 className="techno-card-title"> {tech.name} </h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
