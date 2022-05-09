import React from "react";
import { FaThLarge, FaExternalLinkAlt } from "react-icons/fa";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Realizations.css";

import { AppConfig } from "../../config/AppConfig";
import { Link } from "react-router-dom";

export default function Realizations() {
  return (
    <div id="realizations" className="realizations-component">
      <Container>
        <Row>
          <Col>
            <h1 className="app-section-title">
              <FaThLarge />
              {AppConfig("realizations").title}
            </h1>
          </Col>
        </Row>
        <Row>
          {AppConfig("realizations").projects.map((proj, pid) => (
            <Col md={4} key={pid}>
              <div className="project-card shadow">
                <Image
                  src={require("../../assets/pfolio/" + proj.image)}
                  alt={"project: " + proj.name}
                  className="project-card-image"
                />
                <h3 className="project-card-title"> {proj.name} </h3>
                <div className="project-card-body" key={pid}>
                  <p className="project-card-text">{proj.descriptions}</p>
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  title={"Visiter " + proj.name}
                  className="project-card-link"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
