import React from "react";
import { FaThLarge } from 'react-icons/fa'
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Realizations.css";

import { AppConfig } from "../../config/AppConfig";

export default function Realizations() {
  return (
    <div id="realizations" className="realizations-component">
      <Container>
        <Row>
          <Col>
            <h1 className="realizations-title"> 
            <FaThLarge />
            {AppConfig("realizations").title} 
            </h1>
          </Col>
        </Row>
        {AppConfig("realizations").projects.map((proj, pid) => (
          <Row key={pid}>
            <Col md={8} >
              <div className="project-card" >
                <Image
                  src={require("../../assets/pfolio/" + proj.image)}
                  alt={"project: " + proj.name}
                  className="project-card-image"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="project-card" key={pid}>
                <h3 className="project-card-title"> {proj.name} </h3>
                <p className="project-card-text">{proj.descriptions}</p>
                <p className="project-card-link"> {proj.link} </p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
